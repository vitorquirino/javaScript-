let a = {
            nome:'vitor',
            nota:  8.5       
        }

let b = JSON.stringify(a)   

console.log(a)        
console.log(b)  



let a2 = '{"nome":"léo", "nota":7.8}'

let b2 = JSON.parse(a2)

console.log(a2)
console.log(b2)
       
console.log(b2.nota)

       
