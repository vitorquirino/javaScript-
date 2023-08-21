
let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("crianca")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")


function calcular(){
    console.log("calculando...")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qdttotalCarne = carnepp(duracao) * adultos + (carnepp(duracao) / 2 * criancas)
    let qdttotalCerveja = cervejapp(duracao) * adultos 
    let qdttotalBebidas = bebidaspp(duracao) * adultos + (bebidaspp(duracao) / 2 * criancas)
    


    resultado.innerHTML =`<p>${qdttotalCarne/1000}kg de carne</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qdttotalCerveja/355)} latas de cerveja</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qdttotalBebidas/2000)} garrafas de bebidas</p>`



}

function carnepp(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
    
}


function cervejapp(duracao){
    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
    
}


function bebidaspp(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
    
}
