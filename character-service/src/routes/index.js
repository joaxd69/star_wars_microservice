const {Router} =require('express')

const {getCharacter}=require('../handlers')
const router=Router();
const midleware=require('../middlewares')

router.get('/',midleware.urlvalidation,getCharacter)

module.exports=router