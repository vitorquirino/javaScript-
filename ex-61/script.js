
//function speakGereric (){
  //  console.log(this.sound)
//}

//let dog = {
  //  sound :" au au ",
   // speak: speakGereric
//}

//let cat = {
  //  sound :" miau ",
   // speak: speakGereric
//}

//dog.speak()
//cat.speak()

//let bindedFunction = speakGereric.bind(cat)
//bindedFunction()

function speakGereric(){
    console.log(this.sound)
}


let dog = {
    sound : "au au au",
    speak : speakGereric
}

let cat = {
    sound : "miau",
    speak : speakGereric
    }

//dog.speak()
//cat.speak()

let bindedFunction = speakGereric.bind(cat)
bindedFunction()