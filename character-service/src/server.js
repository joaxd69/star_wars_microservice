const express=require('express');
const morgan = require('morgan');

const server=express();

server.use(express.json())
server.use(morgan('dev'));

server.use('/characters',require('./routes'))
server.use('*',(req,res)=>{///esto se ejecutara cada vez que se entre en una ruta que no hayamos establecido
    res.status(404).send('Page not found')
})

server.use((err,req,res,next)=>{///por defecto este es el manejador de errores de express,
  res.status(err.statusCode).send({
    error:true,
    data:err.message
  })
})

module.exports=server