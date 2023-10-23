

function novoAluno (nome,idade){
    return {nome, idade}
}

let alunos = [
        novoAluno("mario",23),
        novoAluno("vitor",19),
        novoAluno("igor",34),
        novoAluno("josé",57)
]

function TemMenosde30(aluno){
    return aluno.idade < 30
}

function TemMaisde30(aluno){
    return aluno.idade > 30
}


let alunosComMenosde30 = alunos.filter(TemMenosde30)
let lunosComMaisde30 = alunos.filter(TemMaisde30)
console.log(alunosComMenosde30)
console.log(lunosComMaisde30)