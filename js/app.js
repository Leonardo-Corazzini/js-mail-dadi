const emailutente = prompt('Inserisci la tua email')
const emailRegistrate = ['leocora10@gmail.com','ronaldogoat7@gmail.com']
if (emailRegistrate.includes(emailutente)){
    console.log(`Benvenuto caro utente la tua email ${emailutente} è correttamente registrata`)
} else{
    console.log(`${emailutente} non è associata a nessun account, si prega di accedere con una associata o di creare un nuovo account`)
}
 