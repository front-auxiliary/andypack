const watchinit = require('../watch')
const proxycreat = require('../proxy');
const express = require('express');

const nodeserver = (params) => {
  const {server,loaders,watch} = params;
  const {contentBase,proxy,port} = server;
  var app = express();
  watchinit(watch,loaders);
  proxycreat(app,proxy);
  app.use(express.static(contentBase))
  app.listen(port||80);
  console.log(`http://editer.gaosi.com${port=='80'?'':':'+port}/`)
};


module.exports = nodeserver;
