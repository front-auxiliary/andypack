const fs = require("fs");
const path = require("path");
const jsonpath = path.join(__dirname, "../pack.json");
const ready = require("./ready");
const getmd5 = require('./getmd5');
// 获取md5

const write = (path, content, flog) => {
  // let jsonData = ready(jsonpath);
  // jsonData = JSON.parse(jsonData);
  // let newmd5 = getmd5(content);
  // if(jsonData[path] == newmd5){
  //   return;
  // }

  // let oldcode = fs.readFileSync(path);
  
  // let oldmd5 = getmd5(oldcode);

  // jsonData[path] = newmd5;
 
  // fs.writeFileSync(jsonpath, JSON.stringify(jsonData));

  // if (oldmd5 == newmd5) {
  //   return;
  // }
  if (flog) {
    fs.writeFile(path, content, () => {
      console.log(path, "生成成功");
    });
  } else {
    fs.writeFileSync(path, content, () => {
      console.log(path, "生成成功");
    });
  }
};
module.exports = write;
