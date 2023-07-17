const { ClientError } = require("../utils/errors")

module.exports=(req,res,next)=>{
  // const {name}=req.query
  // if(!name) throw new ClientError('Error personalizado',405)
  return next()
  ///aqui podemos validar datos como por ejemplo cuando queremos que ciertas peticiones no lleguen a  una base de dato s
}