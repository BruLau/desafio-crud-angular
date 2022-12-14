const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const usuarioSchema = new mongoose.Schema({
Nombre: {type: String, required:true},
Apellido: { type: String, required: true },
Correo: { type: String, required: true },
Nacimiento: { type: String, required: true },
Telefono:{ type: Number},
Pais: { type: String ,required: true },
Pregunta: {type: Boolean, required: true },
});

const model = mongoose.model("usuario", usuarioSchema);
module.exports = model;