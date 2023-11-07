const nome = ''


try{


    if(nome == ''){
        throw "o nome não pode ser vazio"
    }
    console.log(nome)
}

catch(err){
    console.log('houve um erro ',err)
}

finally{
    console.log('buenas noites')
}


