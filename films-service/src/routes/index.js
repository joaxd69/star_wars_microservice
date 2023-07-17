const {Router}= require('express');
const Route=Router();
const {getfilms, gethello}=require('../handlers')


Route.get('/',getfilms);
Route.get('/fake',gethello)
module.exports=Route