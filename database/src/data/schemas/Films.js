const { Schema } = require("mongoose");

const FilmsSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  characters: [{ type: String, ref: "characters" }],
  planets: [{ type: String, ref: "planets" }],
});

FilmsSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};
FilmsSchema.statics.get = async function (id) {
  return await this.findById(id) ///hacemos mas eficaz el metodo de buscar por id
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

module.exports = FilmsSchema;
