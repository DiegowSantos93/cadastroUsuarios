const prompt = require('prompt-sync')();

let ultimoId = 1;

const usuarios = [];

const emailDuplicado = (email) => {
    if (usuarios.find(usuario => usuario.email == email)){
        console.log('Email duplicado.')
        return false
    }
    return true
};

const modelo = (id) => {

    const nome = prompt('Digite o nome: ');
    const email = prompt('Digite o email: ');
    const telefones = [];
    
    while (true){
        const telefone = prompt('Digite o telefone ou 0 para Sair: ');

        if (telefone == 0) {
            break;
        }
        telefones.push(telefone)
    }

    if (nome != "" && email != ""){
        let usuario;
        if (id == undefined) {
            usuario = {nome, email, telefones, id: ultimoId,};
            ultimoId++;
        } else {
            usuario = {nome, email, telefones, id,}
        }
        return usuario
    } else {
        console.log('Dados inválidos.');
    }
};

const criar = () => {
    const usuario = modelo()

    if (usuario != undefined){
        usuarios.push(usuario)
        console.log('Usuário criado com sucesso.')
    }
}

const listar = () => {
    usuarios.forEach((usuario, index) => {
        console.log(`${usuario.id}.\nNome: ${usuario.nome}\nEmail: ${usuario.email}`)
        console.log('Telefones:');
        usuario.telefones.forEach((telefone, index) => {
            console.log(`${index +1}. ${telefone}`)
        });
    });
};

module.exports = {criar, listar}
