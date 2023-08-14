let ps = ["vitor","regina","jose","sandra","vitoria"]

function sortear(){
    let np = ps.length 

    let ns = Math.floor(Math.random( ) * np)
    document.getElementById('d').innerHTML = ps[ns]
   
}




