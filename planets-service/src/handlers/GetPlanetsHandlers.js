const {getPlanets}= require('../controllers')
module.exports=async (req,res)=>{
    const data=await getPlanets();
    res.send(data)
}