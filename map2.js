const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.5 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = element => element.preco

let resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)