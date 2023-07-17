const { getHellor } = require("../controllers")

module.exports=(req,res)=>{
const saludo=getHellor()
  res.send(saludo)
}