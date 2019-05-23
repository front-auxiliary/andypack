const proxy = require("http-proxy-middleware");
const proxycreat = (app, proxyconfig) => {
  for (const key in proxyconfig) {
    let exampleProxy = proxy(proxyconfig[key]);
    app.use(key, exampleProxy);
  }
};
module.exports = proxycreat;
