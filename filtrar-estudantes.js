const estudantes = require ('./estudantes.json');

function filtraSemCep (lista, propriedade){
    return lista.filter((estudante) => {
       return !estudante.endereco.hasOwnProperty(propriedade)
    })
}

console.log(filtraSemCep(estudantes, 'cep'))