console.log('Gioco dei dadi');

console.log('computer')
let numberCpu = Math.floor((Math.random() * 6) + 1);
console.log(numberCpu);

console.log('player')
let numberPlayer = Math.floor((Math.random() * 6) + 1);
console.log(numberPlayer);


if (numberCpu > numberPlayer) {
    console.log('computer won');
}else if (numberCpu < numberPlayer) {
    console.log('player won');
}else {
    console.log('deuce');
}