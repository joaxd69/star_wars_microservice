const express = require('express')

const server=express();
server.use('/films',require('./routes'))
module.exports=server