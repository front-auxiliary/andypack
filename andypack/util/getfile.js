const fs = require('fs');
const path = require('path');
const filenum = 0;
var file=[];
var num = 0;
const getfile = (dir)=>{

    var stats = fs.statSync(dir);
    //node里面的也有_this不要用_this
    if (stats.isDirectory()) {
       var newDir=fs.readdirSync(dir,{encoding:'utf8'});
       if(!newDir.length){
         return ;
       }
       newDir.map(function(item){
         
          getfile(path.resolve(dir, item));
       })
      
    } else {
        // console.log(dir,"kkkk")
        // file.push[dir];
        num++;
      
        return dir;
    }

}

module.exports = (dir)=>{
    getfile(dir);
    return {
      file,
      num
    }
};