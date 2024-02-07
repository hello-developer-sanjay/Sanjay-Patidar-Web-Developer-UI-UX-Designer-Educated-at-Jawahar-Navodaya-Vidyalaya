// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://portfolio-back-aruc.onrender.com',
      changeOrigin: true,
    })
  );

  // Add additional proxy for https://edu-back-j3mz.onrender.com/
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://edu-back-j3mz.onrender.com/api/random-blog-titles',
      changeOrigin: true,
    })
  );
};
