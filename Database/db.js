const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");

dotenv.config();


const uri = process.env.DB_URL

mongoose.connect(uri,
    (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("********CONEXION CORRECTA****")
    }
});

module.exports = mongoose;