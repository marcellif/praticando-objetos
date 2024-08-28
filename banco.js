const contaBancaria ={
    titular:"anonimo",
    saldo: 1000,
    depositar: function (valor) {
        this.saldo += valor;
    }, 
    sacar: function (valorDebitado) {
        this.saldo -= valorDebitado;
    }
}

const cliente = {
    nome: "Heitor",
    conta: contaBancaria
}


function mostraSaldo (array){
    console.log(`nome do cliente: ${array.nome}, saldo: ${cliente.conta.saldo}`)
}

mostraSaldo(cliente);

contaBancaria.depositar(500);
contaBancaria.sacar(130);

mostraSaldo(cliente)