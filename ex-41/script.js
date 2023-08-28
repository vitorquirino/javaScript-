let inputAdultos = document.getElementById ("adultos")
let inputCriancas = document.getElementById ("criancas")
let inputDuracao = document.getElementById ("duracao")

let resultado = document.getElementById("resultado")

function calcular(){
    console.log('calculando...')


    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnepp(duracao) * adultos + (carnepp(duracao)/2 * criancas)
    let qtdTotalCerveja = cervejapp(duracao) * adultos 
    let qtdTotalBebidas = bebidaspp(duracao) * adultos + (bebidaspp(duracao)/2 * criancas)
    

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de Cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} garrafas de Bebidas </p>`
}

function carnepp(duracao){
    if(duracao >= 6){
        return  650
    } else{
        return 400
    }
}



function cervejapp(duracao){
    if(duracao >= 6){
        return  2000
    }else{
        return 1200
    }
}



function bebidaspp(duracao){
    if(duracao >= 6){
        return  1500
    }else{
        return 1000
    }
}
    


