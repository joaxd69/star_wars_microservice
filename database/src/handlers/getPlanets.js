const { getPlanets } = require("../controllers");
module.exports = async (req, res) => {
  const planets = await getPlanets();
  res.send(planets);
};
