var nota1 = 8.0
var nota2 = 1.0


var media = (nota1 + nota2) /2

var conceito = ""


if (media >= 8){
    conceito = 'otimo'
}

else if (media >= 6.5){
    conceito = 'bom'
}
else{
    conceito = 'regular'
}

conceito = 'mais ou menos'


console.log('sua nota : ' + media)
console.log(conceito)



switch(conceito){

    case 'otimo':
        console.log('parabens, voce é um otimo aluno!')
        break

    case 'bom':
        console.log('voce esta indo muito bem, continue assim!')
        break

    case 'regular':
        console.log('estude mais!')
        break

    default:
        console.log('houve algum erro')





}