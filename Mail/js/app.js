
let yourMail = prompt('whats your E-Mail?', 'E-Mail');
console.log(yourMail);


const mail = ['utente1@gmail.com','utente2@gmail.com','utente3@gmail.com'];
console.log(mail);

let mailValid

for (let i = 0; i < mail.length; i++) {
    console.log(i);
    const searchMail = mail[i];

    if (searchMail === yourMail) {
        mailValid = true;
    }

}

if (mailValid) {
    console.log('your e-mail is valid');
} else {
    alert('not a valid e-mail');
}
