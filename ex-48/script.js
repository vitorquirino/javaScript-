
function loaded(){
    let t = document.getElementById('titulo')
    t.addEventListener  ("mouseover", texton)
    t.addEventListener  ("mouseout", textout)
}

function texton(){
    this.innerHTML = 'mouse dentro do elemento'
}

function textout(){
    this.innerHTML = 'mouse fora do elemento'
}