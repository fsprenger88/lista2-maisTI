const prompt = require('prompt-sync')()

function ehDataValida(dia, mes, ano) {
    
    dia = parseInt(dia)
    mes = parseInt(mes)
    ano = parseInt(ano)

    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false

    let diasNoMes

    switch (mes) {
        case 2:
            let bissexto = (ano % 400 === 0) || (ano % 100 !== 0 && ano % 4 === 0)
            diasNoMes = bissexto ? 29 : 28
            break
        case 4: case 6: case 9: case 11: 
            diasNoMes = 30
            break
        default: 
            diasNoMes = 31
    }

 
    return dia <= diasNoMes
}

console.log("Digite uma data para validar: ")
let dia = parseInt(prompt("Dia: "))
let mes = parseInt(prompt("Mês: "))
let ano = parseInt(prompt("Ano: "))


if (ehDataValida(dia, mes, ano)) {
    console.log(`A data ${dia}/${mes}/${ano} é válida!`)
} else {
    console.log(`A data ${dia}/${mes}/${ano} é inválida!`)
}