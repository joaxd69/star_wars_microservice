const { Character ,Films,Planet} = require("../data");
module.exports = async () => {
  const Characters = await Character.get(1)
  
  return Characters;
};
