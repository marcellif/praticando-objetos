const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 45.99 },
    { id: 2, nome: "Calça Jeans", preco: 89.99 },
    { id: 3, nome: "Tênis", preco: 179.99 },
    { id: 4, nome: "Boné", preco: 115.99 }
]



function ordenacaoMaisBarato (lista, propriedade){
    return lista.sort((a,b) => {
        if(a[propriedade] < b[propriedade]) return -1;
        if(a[propriedade] > b[propriedade]) return +1;
        return 0;
    })
}

console.log (ordenacaoMaisBarato(listaProdutos, 'preco'))


function  ordenacaoMaisCaro (lista, propriedade){
    return lista.sort((a,b) => {
        if(a[propriedade] < b[propriedade]) return +1;
        if(a[propriedade] > b[propriedade]) return -1;
        return 0;
    })
}

console.log (ordenacaoMaisCaro(listaProdutos, 'preco'))