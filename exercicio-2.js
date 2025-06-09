const prompt = require('prompt-sync')()

console.log("Jogo de Adivinhação - Tente acertar o número entre 1 e 100!")

let numeroAleatorio = Math.floor(Math.random() * 100) + 1
let tentativas = 0
let palpite

while (true) {
    tentativas++
    
    palpite = Number(prompt(`Tentativa ${tentativas}: `))
    
    if (isNaN(palpite)) {
        console.log("Por favor, digite um número válido!")
        tentativas-- 
        continue
    }
    
    if (palpite === numeroAleatorio) {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas!`)
        break
    } else if (palpite < numeroAleatorio) {
        console.log("Mais alto! ⬆")
    } else {
        console.log("Mais baixo! ⬇")
    }
}