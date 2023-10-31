function novoAluno (nome, idade){
    return {nome,idade}
}

const alunos = [
    novoAluno("mario",23),
    novoAluno("josé",45),
    novoAluno("marcia",29),
    novoAluno("vitor",35)
]

function idadeDaturma (nomezao,aluno){
    return nomezao + aluno.nome
}

console.log(alunos.reduce(idadeDaturma," "))