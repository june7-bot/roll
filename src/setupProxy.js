 const { createProxyMiddleware } = require('http-proxy-middleware');
 module.exports = function (app) {
     console.log("=============proxy Set")
     app.use(
         '/api',
         createProxyMiddleware({
             target: 'http://3.35.3.31:8080',
             changeOrigin: true,
             
         })
     );
     //   http://localhost:5000
     app.use(
         '/chatbot',
         createProxyMiddleware({
             target: 'http://222.239.251.223:5000',
             changeOrigin: true,
         })
     );
 };