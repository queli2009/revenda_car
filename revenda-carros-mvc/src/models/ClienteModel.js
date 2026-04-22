const db = require("../config/db");

class ClienteModel{
    satatic async Listar(){
        const[rows] = await db.query("SELECT * FROM  clientes ORDER BY id DESC");
        return rows;

    }
    static async criar(dados){
        const{nome,cpf,telefone,email,endereco} = dados;

        const[result]= await db.query(
            `ÌNSET INTO clientes(nome,cpf,telefone,email,endereco)
             VALUES (?,?,?,?,?)`
             [nome,cpf,telefone,email,endereco]
        );

        return {id:result.insertid, ...dados};
    }
}

module.exports =ClienteModel;