// Arquivo: dw3backend/apps/clientes/controller/ctlClientes.js

const mdlClientes = require("../model/mdlClientes");

const getAllClientes = (req, res) =>
    (async () => {
        let registro = await mdlClientes.getAllClientes();
        res.json({ status: "ok", registro: registro });
    })();

const getClienteByID = (req, res) =>
    (async () => {
        const clienteID = parseInt(req.body.clienteid);
        let registro = await mdlClientes.getClienteByID(clienteID);
        res.json({ status: "ok", registro: registro });
    })();

const insertCliente = (req, res) =>
    (async () => {
        const registro = req.body;
        let { msg, linhasAfetadas } = await mdlClientes.insertCliente(registro);
        res.json({ status: "ok", msg: msg, linhasAfetadas: linhasAfetadas });
    })();

const updateCliente = (req, res) =>
    (async () => {
        const registro = req.body;
        let { msg, linhasAfetadas } = await mdlClientes.updateCliente(registro);
        res.json({ status: "ok", msg: msg, linhasAfetadas: linhasAfetadas });
    })();

const deleteCliente = (req, res) =>
    (async () => {
        const registro = req.body;
        let { msg, linhasAfetadas } = await mdlClientes.deleteCliente(registro);
        res.json({ status: "ok", msg: msg, linhasAfetadas: linhasAfetadas });
    })();

module.exports = {
    getAllClientes,
    getClienteByID,
    insertCliente,
    updateCliente,
    deleteCliente,
};