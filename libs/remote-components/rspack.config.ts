import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import * as RefreshPlugin from '@rspack/plugin-react-refresh';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
const isDev = process.env.NODE_ENV === 'development';

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];

export default defineConfig({
  name: 'remote_components',
  context: __dirname,
  entry: {
    main: './src/index.ts',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
  },
  output: {
    publicPath: isDev ? 'http://localhost:9090/' : '/dist/',
    filename: '[name].js',
    path: `${__dirname}/dist`,
    library: {
      type: 'umd',
      name: 'components',
    },
    clean: true,
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
    isDev ? new RefreshPlugin() : null,
    new ModuleFederationPlugin({
      name: 'remote_components', // Ensure this is properly set
      exposes: {
        './Test': './src/Test.tsx', // Check if the path is correct
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
  ].filter(Boolean), // Remove null values from the plugins array
  devServer: {
    port: 9090,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
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
});