console.log('Gioco dei dadi');

let numberCpu = Math.floor((Math.random() * 6) + 1);
let numberPlayer = Math.floor((Math.random() * 6) + 1);


console.log('cumputer');
let cpu = numberCpu;
console.log(cpu);

console.log('player');
let player = numberPlayer;
console.log(player);

if (cpu > player) {
    console.log('computer won');
}else if (cpu < player) {
    console.log('player won');
}else {
    console.log('deuce');
}