class Produtos_dao {
    constructor(db) {
        this._db = db;
    }

    selectNaTabelaProdutos(callback) {
        var sqlConsProduto = 'SELECT fotoProduto, nomeProduto, precoProduto, idProduto FROM PRODUTO';
        console.log(sqlConsProduto);
        this._db.query(sqlConsProduto, (erro, resultados) =>
            callback(erro, resultados))
    }
}
module.exports = Produtos_dao;