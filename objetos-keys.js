const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
     enderecos: [{
       rua: 'Rua Joseph Climber',
       numero: '45',
       complemento: 'apto 43'
     },
     {
       rua: 'Rua Dona Clotilde',
       numero: '71',
       complemento: null
    }]
  }
  
const chavesDoObjeto = Object.keys(estudante);
console.log(chavesDoObjeto);

let objetoProcurado = 'nota'

if (!chavesDoObjeto.includes(objetoProcurado)){
  console.error(`${objetoProcurado} não está disponível no objeto!`);
}else{
  console.log(`${objetoProcurado} está no objeto`);
}