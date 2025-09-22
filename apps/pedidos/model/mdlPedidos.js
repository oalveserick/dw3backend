// Arquivo: dw3backend/apps/pedidos/model/mdlPedidos.js

const db = require("../../../database/databaseconfig");

const getAllPedidos = async () => {
    return (
        await db.query(
            `SELECT p.*, c.nome as nome_cliente 
       FROM pedidos p 
       JOIN clientes c ON p.clienteid = c.clienteid 
       WHERE p.deleted = false 
       ORDER BY p.pedidoid ASC`
        )
    ).rows;
};

const getPedidoByID = async (pedidoIDPar) => {
    return (
        await db.query("SELECT * FROM pedidos where pedidoid = $1 and deleted = false", [
            pedidoIDPar,
        ])
    ).rows;
};

const insertPedido = async (pedidoREGPar) => {
    return (
        await db.query(
            "INSERT INTO pedidos (numero, data, valortotal, clienteid) VALUES ($1, $2, $3, $4) RETURNING pedidoid",
            [
                pedidoREGPar.numero,
                pedidoREGPar.data,
                pedidoREGPar.valortotal,
                pedidoREGPar.clienteid,
            ]
        )
    ).rows;
};

const updatePedido = async (pedidoREGPar) => {
    return (
        await db.query(
            "UPDATE pedidos SET numero = $1, data = $2, valortotal = $3, clienteid = $4 WHERE pedidoid = $5",
            [
                pedidoREGPar.numero,
                pedidoREGPar.data,
                pedidoREGPar.valortotal,
                pedidoREGPar.clienteid,
                pedidoREGPar.pedidoid,
            ]
        )
    ).rows;
};

const deletePedido = async (pedidoIDPar) => {
    return (
        await db.query("UPDATE pedidos SET deleted = true WHERE pedidoid = $1", [
            pedidoIDPar,
        ])
    ).rows;
};

module.exports = {
    getAllPedidos,
    getPedidoByID,
    insertPedido,
    updatePedido,
    deletePedido,
};