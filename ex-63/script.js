let usuarios = ["adriano", "nicolas", "josé" , "joão" , "iza"]

function inserirUsuario(nome, callback){
    setTimeout(()=>{
        usuarios.push(nome);
        callback()
    },1000)
    
}

function listarUsuario(nome){
    console.log(usuarios)
}


inserirUsuario("igor",listarUsuario)
