function memoize(fn) {

    let cache = new Map()
    return function(...args) {
        let key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)
        }
        let result = fn(...args)
        cache.set(key, result)
        return result
    }
}

function calcularFatorial(n) {
    console.log(`Calculando fatorial de ${n}.`)
    if (n === 0) return 1
    return n * calcularFatorial(n - 1)
}

let fatorialMemoizado = memoize(calcularFatorial)

console.log(fatorialMemoizado(6))
console.log(fatorialMemoizado(5))
console.log(fatorialMemoizado(4))