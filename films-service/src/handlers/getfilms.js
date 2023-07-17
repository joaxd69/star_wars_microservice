const {getfilms} =require('../controllers')
module.exports=async(req,res)=>{
    const datos=await getfilms()
    res.send(datos)
}