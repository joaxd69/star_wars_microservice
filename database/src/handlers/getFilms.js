const {getFilms}=require('../controllers')
module.exports=async(req,res)=>{
   const Films= await getFilms();
   res.send(Films)
}