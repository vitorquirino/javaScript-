var pessoa = {
    nome:"josé da silva",
    idade:35,
}

var contato = {
    telefone:99876543,
    email:"joazinho@gmail.com",
}

var copia = {...pessoa,  ...contato}
copia.idade = 88

console.log(pessoa)
console.log(copia)


// var notas_turma1 = [10,8,7,9]

// var notas_turma2 = [4,6,8,10]

// var juntar = [...notas_turma1, "  ",...notas_turma2]
// console.log( "notas da primeira turma: ",notas_turma1)
// console.log("notas da segunda turma: ",notas_turma2)
// console.log("juntando as notas das turmas: ", juntar)