class Clientes_dao {
    constructor(db) {
        this._db = db;
    }
    selectNaTabelaCliente(login, senha) {
        return new Promise((resolve, reject) => {
            var sqlConsCliente = "SELECT * FROM Cliente WHERE cpf='" + login + "' and senha='" + senha + "'";
            console.log("SELECT MONTADO = " + sqlConsCliente);
            this._db.query(sqlConsCliente, function(erro, resultado) {
                if (resultado.length > 0) {
                    var dados = resultado.length;
                    resolve(dados);
                } else {
                    return reject('USUÁRIO NÃO EXISTE NO BD');
                }
            })
        })
    }

    checarSeExiste(login) {
        return new Promise((resolve, reject) => {
            var sqlConsCliente = "SELECT * FROM Cliente WHERE cpf='" + login + "'";
            console.log("SELECT MONTADO = " + sqlConsCliente);
            this._db.query(sqlConsCliente, function(erro, resultado) {
                if (resultado.length > 0) {
                    var dados = resultado.length;
                    resolve(dados);
                } else {
                    return reject('USUÁRIO NÃO EXISTE NO BD');
                }
            })
        })
    }

    incluiClientes(nome, cpf, email, senha, dataNiver) {
        return new Promise((resolve, reject) => {
            var sqlInsCliente = "INSERT INTO CLIENTE VALUES( null, '" + nome + "', '" + cpf + "', '" + email + "', '" + senha + "', '" + dataNiver + "')";
            console.log("INSERT MONTADO = " + sqlInsCliente);
            this._db.query(sqlInsCliente, function(erro) {
                if (erro) {
                    console.log(erro);
                    return reject('ERRO NA INCLUSÃO DO NOVO REGISTRO NA TAB CLIENTES NO BD');
                } else { return resolve(); }
            })
        })
    }

    getIdCliente(cpf) {
        return new Promise((resolve, reject) => {
            var sqlGetId = "SELECT idCliente FROM Cliente WHERE cpf = '" + cpf + "'";
            console.log(sqlGetId);
            this._db.query(sqlGetId, function(erro, resultado) {
                if (resultado.length > 0) {
                    var dados = resultado.length;
                    resolve(dados);
                } else {
                    return reject('USUÁRIO NÃO EXISTE NO BD');
                }
            })
        })
    }

}
module.exports = Clientes_dao;