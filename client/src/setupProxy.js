const { createProxyMiddleware } = require('http-proxy-middleware');
//https://github.com/chimurai/http-proxy-middleware v2.x.x
//https://github.com/chimurai/http-proxy-middleware/tree/v0.21.0#readme v0.x
module.exports = function(app) {
    app.use('/api', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
    //app.listen(3000);
};