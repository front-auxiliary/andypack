const watchinit = require('../watch')
const proxycreat = require('../proxy');
const express = require('express');

var app = express();
var serverL = require('http').createServer(app);
var io = require('socket.io').listen(serverL);

const nodeserver = (params) => {
  const { server, loaders, watch } = params;
  const { contentBase, proxy, port } = server;
  watchinit(watch, loaders);
  proxycreat(app, proxy);
  app.use(express.static(contentBase))
  serverL.listen(port || 80);
  io.on('connection', function (socket) {
    
    socket.on("disconnect", function () {
      console.log("a user go out");
    });

    socket.on("message", function (obj) {
      console.log("-----------")
      socket.emit('receive_message');
      socket.broadcast.emit('receive_message');
      // receive_message
      // io.emit("message", obj);
    });
  });

  
  console.log(`http://editer.gaosi.com${port == '80' ? '' : ':' + port}/`)
};


module.exports = nodeserver;
