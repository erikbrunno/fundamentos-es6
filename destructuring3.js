function rand({min = 0, max = 1000}) {
    console.log(min, max)
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { min: 40, max: 50}
console.log(rand(obj))

console.log(rand({ min: 900}))

console.log(rand({}))