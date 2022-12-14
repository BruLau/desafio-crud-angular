const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const actividadesSchema = new mongoose.Schema({
Create_date: { type: String, required: true },
Id_usuario: { type: String, required: true },
Actividad: { type: String, required: true },
});

const model = mongoose.model("actividades", actividadesSchema);
module.exports = model;