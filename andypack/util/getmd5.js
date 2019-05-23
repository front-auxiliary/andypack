const crypto = require("crypto");
const getmd5=(content)=>{
  let fsHash = crypto.createHash("md5");
  fsHash.update(content)
  return fsHash.digest('hex')
}


module.exports = getmd5;