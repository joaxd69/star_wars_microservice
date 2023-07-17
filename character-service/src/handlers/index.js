const {catchedAsync}=require('../utils')

module.exports={
getCharacter:catchedAsync(require('./characterHandler'))
}