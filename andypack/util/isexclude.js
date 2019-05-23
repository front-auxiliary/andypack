module.exports = (src,exclude)=>{
  let isexclude = false;
  for(let i=0;i<exclude.length;i++){
    if( src.search(exclude[i])!=-1){
       return true;
    }
    
  }
  return false;
}