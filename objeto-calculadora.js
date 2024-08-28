
const calculadora = {
    soma: function(a,b){
        return a + b;
    },
    subtracao: function(a,b){
        return a - b;
    },
    multiplicacao: function(a,b){
        return a * b;
    },
    divisao: function(a,b){
        return a / b
    },
    media: function(array){
        let somaArray = array.reduce((acumulado, numero) => acumulado + numero, 0);
        return somaArray / array.length;
    }
}


console.log(calculadora.soma(10,3));
console.log(calculadora.subtracao(10,3));
console.log(calculadora.multiplicacao(10,3));
console.log(calculadora.divisao(30,3));
console.log(calculadora.media([8,5,4,5]))

