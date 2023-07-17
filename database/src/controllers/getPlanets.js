const { Films } = require("../data/");
module.exports = async () => {
  const data = await Films.find();
  return data;
};
