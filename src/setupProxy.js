const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/requestUrl",
    createProxyMiddleware({
      target: "http://history.muffinlabs.com/",
      secure: false,
      changeOrigin: true,
    })
  );
};
