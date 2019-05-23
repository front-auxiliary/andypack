const fs = require("fs");
const ready = path => {
  
  return fs.readFileSync(path);
};

module.exports = ready;
