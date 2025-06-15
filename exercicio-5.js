const prompt = require('prompt-sync')

function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

let log = debounce(console.log, 200);

log("1")
log("2") 
log("3")