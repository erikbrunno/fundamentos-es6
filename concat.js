const filhos = ['Jose', 'Carkis']
const filhas = ['Ana', 'Maria']

const todos = filhos.concat(filhas, 'Joana')
console.log(todos)

const novoArray = [].concat([1, 2], [3, 4], 5, [[6,7]])
console.log(novoArray)