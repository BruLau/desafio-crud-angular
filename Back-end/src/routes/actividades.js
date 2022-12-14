const express = require("express");
const router = express.Router();
const axios = require("axios");
const Actividades = require("../../../Database/src/models/actividades");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;
// router.post("/:id/:activity", async (req, res) => {
//     try {
//       //hola
//       const fecha = new Date();
//         const actividades = await Actividades.create(req.body);
//         actividades.Id_usuario = req.params.id
//         actividades.Create_date = fecha
//         if(req.params.activity === "create"){
//           actividades.Actividad = "create"
//         }
//         if(req.params.activity === "delete"){
//           actividades.Actividad = "delete"
//         }
//         if(req.params.activity === "actualizacion"){
//           actividades.Actividad = "actualizacion"
//         }
//         actividades.save();
//         res.status(200).json(actividades);
//     } catch (error){console.log(error)}
// });

router.get("/", async (req, res) => {
  let actividades = await Actividades.find();
   try {
         res.send(actividades);  
   } catch (err) {
     res.json(err);
   }
 });
  

 module.exports = router;