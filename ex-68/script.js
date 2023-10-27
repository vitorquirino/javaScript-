// function novoAluno (nome,idade){
//     return {nome,idade}
// }

// let alunos = [
//     novoAluno("mario",23),
//     novoAluno("josé",45),
//     novoAluno("marcia",29),
//     novoAluno("joao",35)
// ]

// function alunoDaqui5anos (aluno){
//     let novoAluno = aluno;
//     novoAluno.idade += 5;
//     return novoAluno
// }

//  console.log(alunos.map(alunoDaqui5anos))

let alunoA = {nome:"vitor", idade:15}
let alunoB = {...alunoA}
alunoB.idade = 25
alunoB.nome = "vinicius"