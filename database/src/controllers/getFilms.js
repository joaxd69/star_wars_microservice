const{Films}=require('../data')

module.exports=async()=>{
  const data= Films.find();
  return data
}