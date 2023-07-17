const axios = require("axios");
module.exports = async () => {
  const data =await axios.get("http://database:8004/characters")
   console.log(data.data)
   console.log('hola');
  return data.data
};
