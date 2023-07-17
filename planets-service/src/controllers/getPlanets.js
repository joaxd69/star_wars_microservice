const {list}=require('../data')
module.exports=async()=>{
    const data=await list();
  
    return data
}