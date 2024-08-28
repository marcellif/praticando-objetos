const pessoa = {
nome:"Alvin",
idade: 10,
solteiro: true,
hobbies:["cantar", "dançar", "ganhar brinquedos"]
}


function mostrarInfoPessoa (objeto){
    console.log(`Nome da pessoa: ${objeto['nome']} - tipo de informação ${typeof(objeto['nome'])}`);
    console.log(`Idade da pessoa: ${objeto['idade']} - tipo de informação ${typeof(objeto['idade'])}`);
    console.log(`Estado civil da pessoa: ${objeto['solteiro']} - tipo de informação ${typeof(objeto['solteiro'])}`);
    console.log(`Hobbies da pessoa: ${objeto['hobbies']} - tipo de informação ${typeof(objeto['hobbies'])}`);
}


mostrarInfoPessoa(pessoa)