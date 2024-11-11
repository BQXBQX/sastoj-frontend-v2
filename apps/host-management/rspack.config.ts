import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import * as RefreshPlugin from '@rspack/plugin-react-refresh';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
const isDev = process.env.NODE_ENV === 'development';

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];

export default defineConfig({
  context: __dirname,
  entry: {
    main: './src/main.tsx',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
  },
  output: {
    publicPath: isDev ? 'http://localhost:8081/' : 'auto', // Replace with your production URL if applicable
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    isDev ? new RefreshPlugin() : null,
    new ModuleFederationPlugin({
      name: 'host_management',
      remotes: {
        remote_pages: 'remote_pages@http://localhost:9091/mf-manifest.json',
      },
      shared: {
        react: {
          singleton: true, // Ensure react is treated as a singleton
          eager: true,
        },
        'react-dom': {
          singleton: true, // Ensure react-dom is treated as a singleton
          eager: true,
        },
      },
    }),
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
  experiments: {
    css: true,
  },
  devServer: {
    historyApiFallback: true,
    port: '8081',
    proxy: [
      {
        context: ['/api'],
        target: 'https://acm.sast.fun',
        changeOrigin: true,
        // logLevel: 'debug', // 启用详细日志记录
      },
    ],
  },
});
