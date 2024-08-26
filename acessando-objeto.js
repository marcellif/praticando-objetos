const aluno = {
    nome: "Lorena",
    sobrenome: "Lopes",
    idade: 19,
    turma:3001,
    sexo:"feminino",
    cpf: "23579445052"
}

function acessaDados (objeto, propriedade){
    return objeto[propriedade];
}

console.log(acessaDados(aluno,'nome'));
console.log(acessaDados(aluno, 'cpf'));