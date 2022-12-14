const express = require("express");
const router = express.Router();
const axios = require("axios");
const Usuarios = require("../../../Database/src/models/usuarios");
const Actividades = require("../../../Database/src/models/actividades");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;
const fecha = new Date().toLocaleDateString();
router.post("/", async (req, res) => {
        try {
          //hola
            console.log(req.body)
            const usuarios = await Usuarios.create(req.body);
            let actividadesObj ={}
            actividadesObj.Id_usuario = usuarios._id
            actividadesObj.Create_date = fecha
            actividadesObj.Actividad = "creacion"
            const actividades = await Actividades.create(actividadesObj);
            actividades.save();
            usuarios.save();
            res.status(200).json(usuarios);
        } catch (error){console.log(error)}
  });

  router.delete("/:_id", async (req, res) => {
    var _id = req.params._id;

    let actividadesObj ={}
    actividadesObj.Id_usuario = _id
    actividadesObj.Create_date = fecha
    actividadesObj.Actividad = "eliminacion"
    const actividades = await Actividades.create(actividadesObj);
    Usuarios.remove({'_id': _id}, function(error, document) {
     if (error) res.send(error);
     return res.send("deleted");
    });
})

router.get("/", async (req, res) => {
   let usuarios = await Usuarios.find();
    try {
          res.send(usuarios);  
    } catch (err) {
      res.json(err);
    }
  });

  router.put("/:_id", async (req, res) => {


    // actividades.Id_usuario = req.params._id
    // actividades.Create_date = fecha
    // actividades.Actividad = "modificacion"
    // actividades.save();
    let actividadesObj ={}
    actividadesObj.Id_usuario = req.params._id
    actividadesObj.Create_date = fecha
    actividadesObj.Actividad = "actualizacion"
    const actividades = await Actividades.create(actividadesObj);
    Usuarios.findByIdAndUpdate(req.params._id, req.body,
                                function (err, docs) {
        if (err){
            console.log(err)
            res.status(400).send("no se pudo actualizar el usuario");
        }
        else{
       
            console.log("Updated User : ", docs);
            res.send("actualizado con exito")
        }
    });
    })

    router.get("/:_id", async(req,res) => {
      try {
        Usuarios.find({_id: req.params._id},(error, user)=>{
              res.json(user)
          })
      }
      catch(error) {
          res.status(500).send(error)
      }
    })
  

 module.exports = router;