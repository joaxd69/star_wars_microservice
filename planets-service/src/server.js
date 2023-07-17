const express = require('express')
const server = express();
const morgan=require('morgan')

server.use(morgan('dev'))

server.use('/planets',require('./routes'))

server.use('*',(req,res)=>{
   res.status(404).send('page not found')
})


module.exports=server