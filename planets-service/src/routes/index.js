const {Router}=require('express');

const router=Router();
const {getPlanets}=require('../handlers')

router.get('/',getPlanets)


module.exports=router