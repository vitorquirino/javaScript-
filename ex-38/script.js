
onload = function(){
    let nome = this.localStorage.getItem("nome")
    let h1 = document.getElementById("nome")
    h1.innerHTML = nome
}

function atualizar(element){
    let valor = element.value
    console.log(valor)

    let h1 = document.getElementById("nome")
    h1.innerHTML = valor

    localStorage.setItem("nome", valor)
}

