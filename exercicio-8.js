let vendas = [
  { cliente: 'Fabrício', total: 95 },
  { cliente: 'Fabio', total: 200 },
  { cliente: 'João', total: 250 },
  { cliente: 'Rafaela', total: 40 },
  { cliente: 'Vitor', total: 150 }
]

function agruparPorCliente(vendas) {
   return vendas.reduce(function(acumulador, vendaAtual) {
    if (acumulador[vendaAtual.cliente]) {
      acumulador[vendaAtual.cliente] += vendaAtual.total
    } else {
      acumulador[vendaAtual.cliente] = vendaAtual.total
    }
    return acumulador
  }, {})
}

let resultado = agruparPorCliente(vendas)

console.table(resultado)