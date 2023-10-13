// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://port-back-gbq9.onrender.com',
      changeOrigin: true,
    })
  );
};

