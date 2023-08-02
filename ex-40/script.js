var atnum = 0;

var interval;

function atualizartexto(){
    let h = document.getElementsByTagName('h1')[0]
    h.innerHTML += " " + atnum
    atnum++
}


function iniciar(){

  interval =  setInterval(atualizartexto, 1000);

}

function parar(){
    clearInterval(interval)
}