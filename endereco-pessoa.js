const pessoa = {
    nome:"Robbie",
    idade: 20,
    solteiro: true,
    hobbies:["Lutar karatê", "parque aquatico", "festas"],
    endereco:{
    rua: "Rua malibu",
    numero: "5",
    cidade: "Califórnia"
        }
    }

    function mostrarInfoPessoa (objeto){
        console.log(`Nome da pessoa: ${objeto['nome']} - tipo de informação ${typeof(objeto['nome'])}`);
        console.log(`Idade da pessoa: ${objeto['idade']} - tipo de informação ${typeof(objeto['idade'])}`);
        console.log(`Estado civil da pessoa: ${objeto['solteiro']} - tipo de informação ${typeof(objeto['solteiro'])}`);
        console.log(`Hobbies da pessoa: ${objeto['hobbies']} - tipo de informação ${typeof(objeto['hobbies'])}`);
        console.log(`Endereço:
            Rua: ${objeto.endereco.rua},
            numero: ${objeto.endereco.numero},
            cidade: ${objeto.endereco.cidade}`)
    }
    
    
    mostrarInfoPessoa(pessoa)