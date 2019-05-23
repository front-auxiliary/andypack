const fs = require("fs-extra");
const path = require("path");
const util = require("../util");
const transform = require('@babel/core').transform;
const UglifyJS = require("uglify-js");
const { ready, write, mkdir,isexclude,deleteall } = util;
const isWin = /^win/.test(process.platform);
var num = 0;
let prodPath = '';
let srcPath = '';
let repalcePathKey = '/'
let buildParams = {};
if(isWin){
  repalcePathKey = '\\'
}

const getfile = dir => {
  var stats = fs.statSync(dir);
  if (stats.isDirectory()) {
    var newDir = fs.readdirSync(dir, { encoding: "utf8" });
    if (!newDir.length) {
      return;
    }
    newDir.map(function(item) {
      getfile(path.resolve(dir, item));
    });
  } else {
    num++;
    // console.log(',buildParams.exclude',isexclude(dir,buildParams.exclude))
    // if(isexclude(dir,buildParams.exclude)){
    //   return dir;
    // }
    if (dir) {
      var code = ready(dir);
      if (dir.search(/\.js$/) != -1) {
        
        code = transform(code, {
          presets: ["@babel/env",["minify", {
            builtIns: false,
            evaluate: false,
            mangle: false
          }]],
          
        }).code;
        code = UglifyJS.minify(code).code;
        code = code.replace('"use strict";','');
      }
      let filepath = dir.replace(srcPath, prodPath);
     
      let dirpath = filepath.split(repalcePathKey);
      dirpath.length = dirpath.length - 1;
      dirpath = dirpath.join(repalcePathKey);
      mkdir(dirpath);
      write(filepath, code);
      console.log(filepath,"ok")

      
    }
  
  }
  return dir
};


module.exports = (params)=>{
  prodPath = params.build.output.path;
  srcPath = params.build.enter;
  buildParams = params.build;
  const jsonpath = path.join(__dirname, "../pack.json");
  fs.exists(jsonpath, exists => {
   
    if(!exists){
      fs.writeFileSync(jsonpath,'{}')
    }
  })
  // deleteall(prodPath);
  // return ;
  getfile(srcPath);
  console.log('打包完毕')
}