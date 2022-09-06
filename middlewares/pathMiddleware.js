const { request, response } = require("express");

const pathMiddleware =(request , response , next) =>{

    console.log("pathmiddleware started");
    next();
    console.log("path middle ware eneded")
}

module.exports ={
    pathMiddleware,
}