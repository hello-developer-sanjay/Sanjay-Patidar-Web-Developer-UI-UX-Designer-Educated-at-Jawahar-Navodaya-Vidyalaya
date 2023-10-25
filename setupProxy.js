// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://portfolio-backend-lp9q.onrender.com',
      changeOrigin: true,
    })
  );
};

