const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const distDir = path.join(__dirname, '../dist');

app.use(
  '/',
  express.static(distDir, {
    setHeaders: (res, path) => {
      res.set('Cache-Control', 'public, max-age=0, must-revalidate');
    },
  }),
);

// 代理 /remote_pages 到 target
app.use(
  '/remote_pages',
  createProxyMiddleware({
    target: 'http://localhost:12346',
    changeOrigin: true,
    pathRewrite: {
      '^/remote_pages': '',
    },
  }),
);

// 代理 /remote_apis 到 target
app.use(
  '/remote_apis',
  createProxyMiddleware({
    target: 'http://localhost:12345',
    changeOrigin: true,
    pathRewrite: {
      '^/remote_apis': '', // 修正这里的 pathRewrite 错误
    },
  }),
);

// dev, use this
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://acm.sast.fun/api',
    changeOrigin: true,
  }),
);

// 对所有非静态文件的请求，返回 index.html
app.get('*', (req, res, next) => {
  const filePath = req.path;

  // 检查是否是静态文件请求
  if (
    /\.(js|css|jpg|jpeg|png|gif|svg|ico|eot|otf|ttf|woff|woff2|mp4|webm)$/.test(
      filePath,
    )
  ) {
    return next(); // 继续处理静态文件请求
  }

  res.sendFile(path.join(distDir, 'index.html')); // 返回 index.html，前端路由会接管
});

// 提供静态文件服务

console.log(distDir);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
