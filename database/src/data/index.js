const { envs } = require("../config");
const mongoose = require("mongoose");

const con = mongoose.createConnection(envs.DB_URL);

module.exports = {
  characters: con.model("characters", require("./schemas/Characters")),
  films: con.model("films", require("./schemas/Films")),
  planets: con.model("planets", require("./schemas/Planets")),
};
