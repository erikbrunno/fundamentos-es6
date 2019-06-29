//para chave/valor
const saudacao = 'Opa' //Contexto lexico 1

function exec() {
    const saudacao = 'Fala' //Contexto lexico 2
    return saudacao
}

//Objetos sao grupos aninhados de chave e valor

const cliente = {
    nome: 'Pedro',
    idade: 20,
    peso: 100,
    endereco: {
        logradouro: 'Rua Maria da conceicao',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)