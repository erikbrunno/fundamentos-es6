const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//Remove o ultimo elemento do aray
pilotos.pop()
console.log(pilotos)

//Adiciona elementos no final do array
pilotos.push('Verstappen')
console.log(pilotos)

//Remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

//Add elemento na primeira posição do array
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode add e remover elemetnos

//Add elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover um elemento da posicao 3 do array
pilotos.splice(3, 1)
console.log(pilotos)

//slice retorna um novo array a partir de um determinado indice
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(2, 4)
console.log(algunsPilotos2)
