const chokidar = require("chokidar");
const less = require("less");
const fs = require("fs");
const loader = require("../loader");

const render = (loaderconfig, path) => {
  if (path && path.search(/\.less$/) != -1) {
    loader(loaderconfig, path, (e, output) => {});
  }
};

function watchinit(watchconfig, loaders) {
  const watch = chokidar.watch(watchconfig.join(","));
  watch
    .on("ready", render.bind(null, loaders))
    .on("add", render.bind(null, loaders))
    .on("unlink", render.bind(null, loaders))
    .on("addDir", render.bind(null, loaders))
    .on("unlinkDir", render.bind(null, loaders))
    .on("change", render.bind(null, loaders));
}
module.exports = watchinit;
