const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2022,
    cor: "verde escuro",
    novo: false,
    placa: "RIR2324",
    ligado: false,
    ligar: function () {
        if (this.ligado === true){
            console.log("o carro já está ligado!")
        }else{
            console.log("O carro foi ligado!")
            this.ligado = true
        }
    },

    desligar: function (){
        if (this.ligado === false){
            console.log("o carro não está ligado!")
        }else{
            console.log("O carro foi desligado!")
            this.ligado = false
        }
        
    }, 
    obterDetalhes:function () {
        for (let propriedade in carro){
            let tipo = typeof carro[propriedade];
            if (tipo !== 'object' && tipo !== 'function' ){
            console.log(`${propriedade}: ${carro[propriedade]}`)
            }
        }
    }
}


carro.ligar()
carro.desligar()
carro.obterDetalhes()