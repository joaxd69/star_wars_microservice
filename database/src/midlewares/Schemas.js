module.exports=(req,res,next)=>{
 const {type}=req.params;
 const allowtypes=['characters','films','planets']
  if(allowtypes.includes(type)){
    next()
  }else{
   throw new Error('Page not found')
  }
}