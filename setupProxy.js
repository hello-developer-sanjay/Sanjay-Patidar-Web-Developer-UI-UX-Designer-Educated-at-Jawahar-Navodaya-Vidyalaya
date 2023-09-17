// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://portfolio-back-dujw.onrender.com',
      changeOrigin: true,
    })
  );
};

