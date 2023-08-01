
let ps = ['vitor', 'regina', 'marcos', 'leandro', 'sandra','paulo']


function sortear(){
    let np = ps.length;

    let ns = Math.floor (Math.random() * np)

    document.getElementById('d').innerHTML = ps[ns]
}