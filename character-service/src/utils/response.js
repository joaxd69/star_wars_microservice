module.exports=(res,statuscode,data)=>{
   res.status(statuscode).json({
    errors:false,
    data
   })
}