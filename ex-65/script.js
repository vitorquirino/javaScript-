let usuarios = ["adriano", "nicolas", "josé" , "joão" , "iza"]

function inserirUsuario(nome){


    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            usuarios.push(nome);

            let error = false;
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


async function  executar(){
    await inserirUsuario("regina")
    listarUsuario()
}
executar()