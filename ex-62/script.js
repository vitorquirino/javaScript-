

let dobro = x => 
    2 * this.x;

//let dobro = function (){
//    return 2 * this.x;
//} 

let numero = {
    x:8,
    d:dobro
}


console.log(numero.d());