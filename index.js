const prompt = require("prompt-sync")();

const {criar, listar} = require("./usuarios.js")

while (true){
    console.log('===Cadastro de usuários===\nEscolha a opção desejada:\n1. Criar usuário\n2. Listar usuário\n3. Editar usuário\n4. Deletar usuário\n5. Sair')
    let opcao = Number(prompt ('Escolha uma opção: '));

    switch (opcao) {
        case 1:
            criar();
            break;
        case 2:
            listar();
            break;
        case 3:

            break;
        case 4:

            break;
        case 5:
            console.log('Saindo do sistema, até mais!');
            process.exit();
        default:
            console.log('Opção inválida.')
            break;
    }
}

