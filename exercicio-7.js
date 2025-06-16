function ordenarPorNomes(produtos) {
    return produtos
    .sort ((a,b) => a.preco - b.preco)
    .map (produtos => produtos.nome)
}

let produtos = [
    {nome: 'Joma Top Flex', preco: 600},
    {nome: 'Street Gato', preco: 500},
    {nome: 'Umbro Pro 5', preco: 450}
]

let nomesOrdenados = ordenarPorNomes(produtos)
console.log (nomesOrdenados)
