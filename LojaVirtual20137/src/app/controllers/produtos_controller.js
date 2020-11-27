const Produtos_dao = require('../BD/produtos_dao');

// instância do BD configurado
var db = require('../../config/database');

class ProdutosControllers {
    listaProduto() {
        return function(req, res) {
            const produtoDAO = new Produtos_dao(db);
            produtoDAO.selectNaTabelaProdutos(function(erro, resultados) {
                res.marko(
                    require('../views/loja.marko'), { produtos: resultados });
            });
        }
    }
}
module.exports = ProdutosControllers;