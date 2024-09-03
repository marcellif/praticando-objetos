const funcionario = {
    nome: 'Romulo Rodrigues',
    idade: 30,
    cpf: '12312312312',
    turma: 'Pyton',
    bolsista: true,
    comidaFavorita: "Pão de queijo",
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


  const exibeValoresObjeto = Object.values(funcionario);
  console.log(exibeValoresObjeto);

  if (exibeValoresObjeto.includes(50)){
    console.log('a idade é 50')
  }else{
    console.log('idade diferente de 50')
  }