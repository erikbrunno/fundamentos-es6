const numeros = [1, 2, 3, 4, 5]

let resultado = numeros.map(numero => numero * 2)
console.log(resultado)

const soma10 = element => element + 10
const triplo = element => element * 3
const paraDinheiro = element => `R$ ${parseFloat(element).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)