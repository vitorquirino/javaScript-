

var calcmedia = function(n1,n2){
    return (n1 + n2) /2
}



var aluno = {nome:'vitor',
             notas:[7,8],
            
             media: calcmedia      
}


var aluno1 = {nome:'josé',
             notas:[9,8],
            
             media: calcmedia       
}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))
