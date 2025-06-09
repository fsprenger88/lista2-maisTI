const prompt = require('prompt-sync')()

function extrairPalavrasUnicas(frase) {
    let palavras = frase.split(' ')
    
    let palavrasUnicas = []
    
    for (let i = 0; i < palavras.length; i++) {
        let palavraAtual = palavras[i]
        
        if (!palavrasUnicas.includes(palavraAtual)) {
            
            palavrasUnicas.push(palavraAtual)
        }
    }
   
    return palavrasUnicas
}


let frase = "olá olá mundo mundo"
let resultado = extrairPalavrasUnicas(frase)
console.log(resultado)