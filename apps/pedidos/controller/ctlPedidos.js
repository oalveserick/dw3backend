// Arquivo: dw3backend/apps/pedidos/controller/ctlPedidos.js

const mdlPedidos = require("../model/mdlPedidos");

const getAllPedidos = (req, res) =>
    (async () => {
        let registro = await mdlPedidos.getAllPedidos();
        res.json({ status: "ok", registro: registro });
    })();

const getPedidoByID = (req, res) =>
    (async () => {
        const pedidoID = parseInt(req.body.pedidoid);
        let registro = await mdlPedidos.getPedidoByID(pedidoID);
        res.json({ status: "ok", registro: registro });
    })();

const insertPedido = (req, res) =>
    (async () => {
        const registro = req.body;
        let { msg, linhasAfetadas } = await mdlPedidos.insertPedido(registro);
        res.json({ status: "ok", msg: msg, linhasAfetadas: linhasAfetadas });
    })();

const updatePedido = (req, res) =>
    (async () => {
        const registro = req.body;
        let { msg, linhasAfetadas } = await mdlPedidos.updatePedido(registro);
        res.json({ status: "ok", msg: msg, linhasAfetadas: linhasAfetadas });
    })();

const deletePedido = (req, res) =>
    (async () => {
        const registro = req.body;
        let { msg, linhasAfetadas } = await mdlPedidos.deletePedido(registro);
        res.json({ status: "ok", msg: msg, linhasAfetadas: linhasAfetadas });
    })();

module.exports = {
    getAllPedidos,
    getPedidoByID,
    insertPedido,
    updatePedido,
    deletePedido,
};