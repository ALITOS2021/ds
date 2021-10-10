const express = require('express');
const serverController = require("../controllers/serverController");

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new serverController.default();
        //obtener inf get
        this.router.get("/users", objServerC.getAllUsers);
        this.router.get("/users/:id", objServerC.getUsers);
        //envio inf post 
        this.router.post("/users", objServerC.register);
        //actualizar put
        this.router.put("/users", objServerC.update);
        //eliminar delete
        this.router.delete("/users", objServerC.deleteUser); 

        //CATEGORIAS

/*        const objServerC = new serverController.default();
        //obtener inf get
        this.router.get("/categorias", objServerC.getAllUsers);
        this.router.get("/categorias/:id", objServerC.getUsers);
        //envio inf post 
        this.router.post("/categorias", objServerC.register);
        //actualizar put
        this.router.put("/categorias", objServerC.update);
        //eliminar delete
        this.router.delete("/categorias", objServerC.deleteUser);*/

    }
}

exports.default = ServerRouter;