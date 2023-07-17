const {response}=require('../utils')
const {getCharacters}=require('../controllers')
module.exports= async (req,res)=>{
    const character= await getCharacters()
    console.log(character);
    response(res,200,character)
}