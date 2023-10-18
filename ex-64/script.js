let usuarios = ["adriano", "nicolas", "josé" , "joão" , "iza"]

function inserirUsuario(nome){


    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            usuarios.push(nome);

            let error = true;
            if(!error){
                resolve();
            }else{
                reject({msg:"error 404"})
            }
            
        },1000)
    })

    return promise;
}

function listarUsuario(nome){
    console.log(usuarios)
}


inserirUsuario("igor").then(listarUsuario).catch((error)=>{
    console.log(error.msg)
})