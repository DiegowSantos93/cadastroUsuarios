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

    if (emailDuplicado(email, id)){
        let usuario;
        if (id == undefined) {
            usuario = {nome, email, telefones, id: ultimoId,};
            ultimoId++;
        } else {
            usuario = {nome, email, telefones, id,}
        }
        return usuario
    } 
        console.log('Falha em realizar a operação.');
};

const criar = () => {
    const usuario = modelo()

    if (usuario != undefined){
        usuarios.push(usuario)
        console.log('Usuário criado com sucesso.')
    }
}

const listar = () => {
    if (usuarios.length == 0){
        console.log('Não existem usuários cadastrados')
        return false
    } else {
        usuarios.forEach((usuario, index) => {
            console.log(`${usuario.id}.\nNome: ${usuario.nome}\nEmail: ${usuario.email}`)
            console.log('Telefones:');
            usuario.telefones.forEach((telefone, index) => {
                console.log(`${index +1}. ${telefone}`)
            });
        });
        return true;
    }
};

const atualizar = (usuario) => {
    if(listar(true)){
        const id = prompt('Qual id de usuário deseja atualizar?');

        const novo = modelo(id);

        const indice = usuarios.findIndex(usuario => id == usuario.id)

        if(indice != -1){
            usuarios[indice] = novo
            console.log('Edição realizada com sucesso.')
        } else {
            console.log('Id inexistente.')
        }
    }
};

const remover = () => {
    if (listar(true)){
        const id = prompt ('Qual id de usuário deseja remover?')

        const indice = usuarios.findIndex(usuario => id == usuario.id)

        if(indice != -1){
            usuarios.splice(indice,1)
            console.log('Remoção realizada com sucesso.')
        } else {
            console.log('Id inexistente.')
        }
    }
};

module.exports = {criar, listar, atualizar, remover}
