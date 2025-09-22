// Arquivo: dw3backend/apps/login/model/mdlLogin.js - VERSÃO FINAL CORRETA

const db = require("../../../database/databaseconfig"); // <-- O CAMINHO CORRETO COM TRÊS PONTOS-PONTOS-BARRA

const GetCredencial = async (loginPar) => {
    return (
        await db.query(
            "select username, password from usuarios where username = $1 and deleted = false",
            [loginPar]
        )
    ).rows;
};

module.exports = {
    GetCredencial,
};