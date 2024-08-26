const aluno = {
    nome: "Artur",
    sobrenome: "Aguiar",
    idade: 13,
    turma:1001,
    sexo:"masculino",
    cpf: "59579445052"
}

console.log(`o nome do aluno é ${aluno.nome}`);
console.log(`os três ultimos dígitos do cpf são ${aluno.cpf.substring(8,12)}`)
