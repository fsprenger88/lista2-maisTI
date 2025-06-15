const prompt = require('prompt-sync')()

function fatorial(n) {
    if (n < 0) {
        throw new Error("Não existe fatorial de números negativos")
    }
    if (n === 0) {
        return 1
    }
    return n * fatorial(n - 1)
}

console.log(fatorial(8))
console.log(fatorial(2))
try {
    console.log(fatorial(-1))
} catch (e) {
    console.log(e.message)
}