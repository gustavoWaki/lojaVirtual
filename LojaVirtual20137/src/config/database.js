const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdinfostore'
});
connection.connect(function(err) {
    if (err)
        console.log('Erro na CONEXÃO com o BDINFOSTORE')
    else
        console.log('CONEXÃO com BDINFOSTORE realizada com SUCESSO!');
});
module.exports = connection;