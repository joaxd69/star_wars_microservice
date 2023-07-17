const {list}=require('../data')
module.exports=async()=>{
    const info = await list()
    return info
}