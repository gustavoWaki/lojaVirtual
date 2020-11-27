// chamando a classe ClientesDAO
const Clientes_dao = require('../BD/Clientes_dao');

const Produtos_controllers = require('../controllers/produtos_controller')
    // instância do BD configurado
var db = require('../../config/database');
const ProdutosControllers = require('../controllers/produtos_controller');
class ClientesControllers {
    validaAcessoCliente() {
        return function(req, res) {
            // instanciando a classe cliente_dao
            const clienteDAO = new Clientes_dao(db);
            clienteDAO.selectNaTabelaCliente(req.body.login, req.body.senha)
                .then(dados => {
                    if (dados > 0) {
                        console.log('CLIENTE EXISTE!! Está VALIDADO!!');

                        var idClie = 0;

                        clienteDAO.getIdCliente(req.body.login)
                            .then(function(res2) {
                                console.log(res2 + "aadada");
                                idClie = res2;
                                res.redirect('/loja/' + idClie);
                            });


                    }
                })
                .catch(erro => {
                    console.log('CLIENTE NÃO EXISTE NO BD!!');
                    console.log(erro);
                    res.redirect('/esqueceuRegistro');
                })
        }
    }

    verificarSeExiste() {
        return function(req, res) {
            // instanciando a classe cliente_dao
            const clienteDAO = new Clientes_dao(db);
            clienteDAO.checarSeExiste(req.body.login)
                .then(dados => {
                    if (dados > 0) {
                        console.log('CLIENTE JÁ EXISTE NÃO PODE CRIAR NOVO');
                        res.redirect('/login');
                    }
                })
                .catch(erro => {
                    console.log('CRIANDO CLIENTE');
                    clienteDAO.incluiClientes(req.body.nome, req.body.login, req.body.email, req.body.senha, req.body.dataNasc)
                    res.redirect('/loja');
                })
        }
    }

    listaCliente() {
        return function(req, res) {
            const clienteDAO = new Clientes_dao(db);
            clienteDAO.selectNaTabelaClientes(function(erro, resultados) {
                res.marko(
                    require('../views/listagemClientes.marko'), { clientes: resultados });
            });
        }
    }

    exibeFormLoja() {
        return function(req, res) {
            res.marko(
                require('../views/loja.marko'));
        }

    }

}
module.exports = ClientesControllers;