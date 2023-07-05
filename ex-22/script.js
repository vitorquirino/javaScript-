
// function criaraluno(nome,n1,n2){
//     return{
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media : function(){
//                 return (this.nota1 + this.nota2)/2
//        }
//     }
//  }   
    


function aluno(nome,n1,n2){

    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2

    this.media = function(){
        return (this.nota1 + this.nota2)/2
    }



}



// var turma = [
//            criaraluno('vitor',9,6),
//            criaraluno('regina',7,9),
//            criaraluno('jose',6,8)
// ]

//  var aluno = turma[0]

var a = new aluno('vitor',8,7)
console.log(a.media())

// for (var aluno of turma){
//     console.log( aluno.nome + ' - ' + aluno.media())
// }


// turma.forEach (function(elemento){
//         console.log(elemento)
// })