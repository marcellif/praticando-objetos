const aluno = {
    nome: "Lorena",
    sobrenome: "Lopes",
    idade: 19,
    turma:3001,
    sexo:"feminino",
    cpf: "23579445052",
    nota: 7.5,
    aprovado: function (notaBase){ 
       return this.nota >= notaBase ? `O aluno foi aprovado com nota ${this.nota}` : `O aluno foi reprovado com nota ${this.nota}`
    }
}


console.log(aluno.aprovado(7))