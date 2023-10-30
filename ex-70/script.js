var  aluno = {
    matricula:1234,
    nome: "marcos",
    telefone: 66765346,
    cidade:"barra do pirai"
}

var  aluno1 = {
    matricula:125,
    nome: "vitor",
    telefone: 547985863,
    cidade:"campinas"
}

const alunos = [aluno,aluno1]
const [ marcos, vitor] = alunos
console.log(vitor)