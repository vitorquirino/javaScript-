function novoAluno (nome, idade){
    return {nome , idade}
}

let alunos = [

    novoAluno("igor",25),
    novoAluno("vitor",19),
    novoAluno("josé",56),
    novoAluno("valdo",47),

]

function nomeidade (aluno){
    return "o aluno " + aluno.nome + " tem " + aluno.idade + " anos"
}

console.log(alunos.map(nomeidade))