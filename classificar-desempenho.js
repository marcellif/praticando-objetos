const pessoa = {
nome: "Francisca",
notas:[2, 2, 3, 5],
calcularMediaNotas: function(){
    let somaNotas = this.notas.reduce((acumulado, nota) => acumulado + nota);
    let media = somaNotas/this.notas.length;
    return media;
},
classificarDesempenho: function (){
    let desempenho;
    if (this.calcularMediaNotas() >= 9){
        desempenho = `O desempenho foi excelente!`
   }else if (this.calcularMediaNotas() <= 8.9 && this.calcularMediaNotas() >= 7.6){
        desempenho = `O desempenho foi bom!`
   }else if (this.calcularMediaNotas() <= 7.5 && this.calcularMediaNotas() >= 6){
        desempenho = `O desempenho foi regular!`
   }else if(this.calcularMediaNotas() < 6){
        desempenho = `O desempenho foi insuficiente!`
   }
   return desempenho;
}
}

console.log(pessoa.calcularMediaNotas())

console.log(pessoa.classificarDesempenho())