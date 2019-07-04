
function Pessoa() {
    this.idade = 0

    //Em uma funcao arrow, o this nao varia
    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}