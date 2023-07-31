let a = {
    nome: "igor",
    nota: 8.5
}

let b = JSON.stringify(a)

let a2 = '{"nome":"fabio", "nota":7.8}'

let b2 = JSON.parse(a2)

console.log(a)
console.log(b)

console.log(a2)
console.log(b2)

console.log(b2.nota)