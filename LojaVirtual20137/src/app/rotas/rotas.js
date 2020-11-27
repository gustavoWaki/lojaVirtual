const ClienteControlador = require('../controllers/clientes_controllers');
const clienteCont = new ClienteControlador();

const ProdutoControlador = require('../controllers/produtos_controller');
const produtoCont = new ProdutoControlador();

module.exports = (aplicacao) => {

    // Evitar problema com o CORS
    aplicacao.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });


    /***************** ROTAS *****************/

    aplicacao.get('/', function(req, res) {
        res.marko(
            require('../views/login.marko'));
        console.log('Acessou a pagina de LOGIN do site');
    });

    aplicacao.get('/inclusaoCliente', function(req, res) {
        res.marko(
            require('../views/inclusaoCliente.marko'));
        console.log('Acessou a pagina de INCLUSAO do site');
    });

    aplicacao.get('/loja/:id', produtoCont.listaProduto());

    aplicacao.post('/validaBDCliente', clienteCont.validaAcessoCliente());

    aplicacao.post('/verificarSeJaExiste', clienteCont.verificarSeExiste());
}