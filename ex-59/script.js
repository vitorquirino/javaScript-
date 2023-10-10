let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')


let resultado = document.getElementById('resultado')

function calcular(){
    console.log('calculando...')



    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    


    let qdTotalCarne = CarnePP(duracao) * adultos + (CarnePP(duracao) / 2 * criancas)
    let qdTotalCerveja = CervejaPP(duracao) * adultos; 
    let qdTotalBebidas = BebidasPP(duracao) * adultos + (BebidasPP(duracao) / 2 * criancas)
    

    resultado.innerHTML = `<p>${qdTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdTotalBebidas/2000)} Pet's de 2l de Bebida</p>`
}

function CarnePP(duracao){
    if(duracao >= 6 ){
        return  650
    }else{
        return 400
    }
}
function CervejaPP(duracao){
    if(duracao >= 6 ){
        return  2000
    }else{
        return 1200
    }
}
function BebidasPP(duracao){
    if(duracao >= 6 ){
        return  1500
    }else{
        return 1000
    }
}