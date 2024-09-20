const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function encontar (lista, propriedade, idAlvo){
    const resultado = lista.find(livro=> livro[propriedade] === idAlvo)
    
    if (resultado){
        return resultado
    }else{
        return (`Não há produto com o id ${idAlvo}`)
    }
}

console.log(encontar(listaProdutos, 'id', 7))