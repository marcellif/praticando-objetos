const livro ={
titulo: 'Orgulho e Preconceito',
autor: 'Jane Austen',
anoPublicacao: 1813,
genero: 'romance',
extras: 'um bom livro'
}

const anoAtual = new Date().getFullYear();

livro.tempoPublicacao = anoAtual - livro.anoPublicacao;

console.log(`Informações do livro
    Título: ${livro.titulo},
    Autor: ${livro.autor},
    Ano de publicação: ${livro.anoPublicacao},
    Gênero: ${livro.genero},
    Tempo desde a publicação: ${livro.tempoPublicacao} anos
    
    `);

console.log (`Meu livro favorito é ${livro['titulo']}`);

livro.avaliacao = null;
//livro.avaliacao = '5/5';

if (livro.avaliacao === null){
    livro.avaliacao = '10/10'
    console.log(`a avaliação do livro é: ${livro.avaliacao}`)
}else{
    console.log(`a avaliação já foi preenchida`);
}


delete livro.extras;
