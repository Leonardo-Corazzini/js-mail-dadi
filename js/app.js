// traccia uno
const emailutente = prompt('Inserisci la tua email')
const emailRegistrate = ['leocora10@gmail.com','ronaldogoat7@gmail.com']
for(let i = 0; i < emailRegistrate.length; i++){
    if (emailRegistrate[i]=== emailutente){
        console.log('Email corretta')
    } 
}
// traccia due
const numeroUtente = Math.floor(Math.random() * 6)
console.log(numeroUtente)
const numeroPc =Math.floor(Math.random() * 6)
console.log(numeroPc)
if (numeroUtente > numeroPc){
    console.log('Bravo hai vinto')
    
} else if (numeroUtente === numeroPc){
    console.log('ah abbiamo pareggiato!')
} else {
    console.log('hahahaha hai perso')
}
 

