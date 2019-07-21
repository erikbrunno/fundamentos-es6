console.log(typeof Array, typeof new Array,  typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos']
console.log(aprovados)
console.log(aprovados[0])

//Add elemento no array
aprovados.push('Erik')
console.log(aprovados[2])

aprovados[7] = 'Renato'
aprovados[9] = 'Flavia'
console.log(aprovados.length)
console.log(aprovados)

//Ordenar o array
aprovados.sort()
console.log(aprovados)

//Remove elementos do array
delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

//Splice é usado para Add, remover ou add e remover ao mesmo tempo elementos do array

//Ex.: remove 1 elemento
aprovados.splice(1, 1)
console.log(aprovados)

//Ex.: remove 2 elemento
aprovados.splice(1, 2)
console.log(aprovados)

//Remove 2 elemtos e adicionar 2 elementos ao mesmo tempo
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)

//Add elementos
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)
