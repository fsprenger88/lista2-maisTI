function paresParaObjeto(pares) {
  let resultado = {}
  
  for (let i = 0; i < pares.length; i++) {
    let par = pares[i]
    let chave = par[0]
    let valor = par[1]
    
    resultado[chave] = valor
  }
  
  return resultado
}

let pares = [['nome', 'Fabrício Sprenger'], ['idade', 21], ['cidade', 'São Leopoldo']]
let objeto = paresParaObjeto(pares)
console.table(objeto)

function objetoParaPares(obj) {
  let pares = [];
  
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  
  return pares
}

let pessoa = { nome: 'Fabio', idade: 49, genero: 'M' }
let arrayDePares = objetoParaPares(pessoa)
console.table(arrayDePares)