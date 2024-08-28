const listaPessoas = [
    {
    nome: "Samanta",
    idade: 35,
    cidade: "Rio Grande do Sul"
    },
    {
    nome: "Gabriela",
    idade: 38,
    cidade: "Rio de Janeiro"
    },
    {
    nome: "Carla",
    idade: 45,
    cidade: "Niteroi"
    },
    {
    nome: "Simone Lorena",
    idade: 54,
    cidade: "São Paulo"
    }];
  
        
    listaPessoas.push({
        nome: "Lilian",
        idade: 54,
        cidade: "Rio de Janeiro"
    }) 
    
    
    function mostraListaPessoas (objeto){
        objeto.forEach(objeto => {
            console.log(`Nome: ${objeto.nome}, Idade: ${objeto.idade}, Cidade: ${objeto.cidade}`);      
    })
}

mostraListaPessoas(listaPessoas);

    function filtrarPorCidade(pessoas, cidade) {
        return pessoas.filter(pessoa => pessoa.cidade === cidade);
    }


    const exibeResultado = filtrarPorCidade(listaPessoas, "Rio de Janeiro");

    const pessoasNiteroi = filtrarPorCidade(listaPessoas, "Niteroi");
    console.log("Pessoas em Niteroi:");
    console.log(pessoasNiteroi);

    console.log("Pessoas no Rio:");
    console.log(exibeResultado);

