const pessoa = {
    nome:"Robbie",
    idade: 20,
    solteiro: true,
    hobbies:["Lutar karatê", "parque aquatico", "festas"],
    endereco:
        [{
        rua: "Rua malibu",
        numero: "5",
        cidade: "Califórnia"
        },
        {
        rua: "av. das americas",
        numero: "32",
        complemento: "apt 115"
        }]
    }

    for(let item in pessoa){
        const tipo = typeof pessoa[item];
        if (tipo !== 'object' && tipo !== 'function'){
            console.log(`${item}: ${pessoa[item]}`)
        }
    
    }