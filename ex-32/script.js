let t1 = document.getElementById('t1')
let t2 = document.getElementById('t2')

t1.onclick = colocrEmMaiusculo
t2.onclick = colocrEmMaiusculo

function colocrEmMaiusculo (){
    this.innerHTML = this.innerHTML.toUpperCase()
}

