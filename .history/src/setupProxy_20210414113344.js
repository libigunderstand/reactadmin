const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    console.log(app);
    app.use(
        createProxyMiddleware("/api", {
            target: "http://47.94.227.12:4000",
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        })
    )
}