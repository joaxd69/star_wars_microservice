const { Schema } = require("mongoose");

const characterSchema = new Schema({
  //similar a cuando definiamos un modelo en sequelize que le asignamos las propiedades y los tipos de datos de las mismas
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: "planets" },
  films: [{ type: String, ref: "films" }],
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("films", ["_id", "title"])
    .populate("homeworld", ["id", "name"]);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id) ///hacemos mas eficaz el metodo de buscar por id
    .populate("films", ["_id", "title"])
    .populate("homeworld", ["id", "name"]);
};
 
characterSchema.statics.upsert= async function(Character){
  this.create(Character)
}
module.exports = characterSchema;
