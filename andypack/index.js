const server = require('./server');
const build = require('./build');


// const pack = (params)=>{
//     server(params);
// }
class pack {
  // config{}
  constructor(){
    this.config = {}
  }
  init(params){

  }
  render(env,params){
      if(env == 'build'){
        build(params);
      }else{
        server(params)
      }
  }
}
module.exports = new pack();