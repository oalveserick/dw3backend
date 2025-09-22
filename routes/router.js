// Arquivo: dw3backend/routes/router.js - VERSÃO AJUSTADA

const express = require("express");
const routerApp = express.Router();

// const appAlunos = require("../apps/alunos/controller/ctlAlunos"); // Comentado pois o arquivo não foi criado ainda
// const appCursos = require("../apps/cursos/controller/ctlCursos"); // Comentado pois o arquivo não foi criado ainda
const appLogin = require("../apps/login/controller/ctlLogin");
const appClientes = require("../apps/clientes/controller/ctlClientes");
const appPedidos = require("../apps/pedidos/controller/ctlPedidos");


// middleware that is specific to this router
routerApp.use((req, res, next) => {
    next();
});

routerApp.get("/", (req, res) => {
    res.send("Olá mundo!");
});

//Rotas de Alunos (DESATIVADAS TEMPORARIAMENTE)
// routerApp.get("/getAllAlunos", appAlunos.getAllAlunos);
// routerApp.post("/getAlunoByID", appLogin.AutenticaJWT, appAlunos.getAlunoByID);
// routerApp.post("/insertAlunos", appLogin.AutenticaJWT, appAlunos.insertAlunos);
// routerApp.post("/updateAlunos", appAlunos.updateAlunos);
// routerApp.post("/DeleteAlunos", appAlunos.DeleteAlunos);

//Rotas de Cursos (DESATIVADAS TEMPORARIAMENTE)
// routerApp.get("/GetAllCursos", appCursos.GetAllCursos);
// routerApp.post("/GetCursoByID", appCursos.GetCursoByID);
// routerApp.post("/InsertCursos", appCursos.InsertCursos);
// routerApp.post("/UpdateCursos", appCursos.UpdateCursos);
// routerApp.post("/DeleteCursos", appCursos.DeleteCursos);

//Rotas de Clientes
routerApp.get("/getAllClientes", appClientes.getAllClientes);
routerApp.post("/getClienteByID", appLogin.AutenticaJWT, appClientes.getClienteByID);
routerApp.post("/insertCliente", appLogin.AutenticaJWT, appClientes.insertCliente);
routerApp.post("/updateCliente", appLogin.AutenticaJWT, appClientes.updateCliente);
routerApp.post("/deleteCliente", appLogin.AutenticaJWT, appClientes.deleteCliente);

//Rotas de Pedidos
routerApp.get("/getAllPedidos", appPedidos.getAllPedidos);
routerApp.post("/getPedidoByID", appLogin.AutenticaJWT, appPedidos.getPedidoByID);
routerApp.post("/insertPedido", appLogin.AutenticaJWT, appPedidos.insertPedido);
routerApp.post("/updatePedido", appLogin.AutenticaJWT, appPedidos.updatePedido);
routerApp.post("/deletePedido", appLogin.AutenticaJWT, appPedidos.deletePedido);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;