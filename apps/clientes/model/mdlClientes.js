const db = require("../../../database/databaseconfig");

const getAllClientes = async () => {
    return (
        await db.query("SELECT * FROM clientes where deleted = false ORDER BY clienteid ASC")
    ).rows;
};

const getClienteByID = async (clienteIDPar) => {
    return (
        await db.query("SELECT * FROM clientes where clienteid = $1 and deleted = false", [
            clienteIDPar,
        ])
    ).rows;
};

const insertCliente = async (clienteREGPar) => {
    //@ Verificando se o cliente já existe
    let linhas = await db.query("SELECT * FROM clientes where codigo = $1", [
        clienteREGPar.codigo,
    ]);

    if (linhas.rowCount > 0) {
        return "Cliente já existe!";
    }

    return (
        await db.query(
            "INSERT INTO clientes (codigo, nome, endereco, ativo) VALUES ($1, $2, $3, $4) RETURNING clienteid",
            [
                clienteREGPar.codigo,
                clienteREGPar.nome,
                clienteREGPar.endereco,
                clienteREGPar.ativo,
            ]
        )
    ).rows;
};

const updateCliente = async (clienteREGPar) => {
    return (
        await db.query(
            "UPDATE clientes SET codigo = $1, nome = $2, endereco = $3, ativo = $4 WHERE clienteid = $5",
            [
                clienteREGPar.codigo,
                clienteREGPar.nome,
                clienteREGPar.endereco,
                clienteREGPar.ativo,
                clienteREGPar.clienteid,
            ]
        )
    ).rows;
};

const deleteCliente = async (clienteIDPar) => {
    return (
        await db.query("UPDATE clientes SET deleted = true WHERE clienteid = $1", [
            clienteIDPar,
        ])
    ).rows;
};

module.exports = {
    getAllClientes,
    getClienteByID,
    insertCliente,
    updateCliente,
    deleteCliente,
};