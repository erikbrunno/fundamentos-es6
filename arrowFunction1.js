let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a //Return implicito quando retira as chaves

console.log(dobro(Math.PI))