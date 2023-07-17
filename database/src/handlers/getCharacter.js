const {getCharactersdb}=require('../controllers')
module.exports = async (req, res) => {
  const controller = await getCharactersdb()
  res.send(controller);
};
