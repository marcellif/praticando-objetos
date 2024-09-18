const estudantes = require('./estudantes.json');

function retornaEstudante (lista, chave, valor){
    return lista.find(estudante => estudante[chave].includes(valor))
}


const estudanteDesejado = retornaEstudante(estudantes,'nome', 'Xylia');
console.log (estudanteDesejado)

console.log(retornaEstudante(estudantes,'telefone', '9916828153'));