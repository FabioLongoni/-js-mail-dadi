
let yourMail = prompt('whats your E-Mail?', 'E-Mail');
console.log(yourMail);

// let mailPresent = 'utente1@gmail.com';

const mail = ['utente1@gmail.com','utente2@gmail.com','utente3@gmail.com'];
console.log(mail)

for (let i = 0; i < mail.length; i++) {
    
    const mailRicercata = mail[i];

    if (mailRicercata === yourMail) {
        console.log('your e-mail is valid');
        
    }else if (mailRicercata !== yourMail) {
        console.log('not a valid e-mail');
    }

}