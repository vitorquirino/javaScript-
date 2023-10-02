
var numero = 0

var interval;



function atualizartexto(){
    let h = document.getElementsByTagName('h1')[0]
    h.innerHTML += " " + numero;
    numero++
}



function iniciar(){

    interval = setInterval(atualizartexto,2000)
}

function parar(){
    clearInterval(interval)
}