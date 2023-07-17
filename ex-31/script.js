



function loaded(){
    let t = document.getElementById('titulo')
   // t.onclick = mudartext

   t.addEventListener('mouseover', mudartext)
   t.addEventListener('mouseout', sairtext)

}

function mudartext(){
    this.innerHTML = 'novo texto'
}

function sairtext(){
    this.innerHTML = 'mouse fora do elemento'
}