const getfile = require('./getfile');
const write = require('./write');
const ready = require('./ready')
const mkdir = require('./mkdir');
const isexclude = require('./isexclude')
const deleteall = require('./deleteall');

module.exports = {
  getfile,
  write,
  ready,
  mkdir,
  isexclude,
  deleteall
}