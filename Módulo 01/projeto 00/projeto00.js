const prompt = require("prompt-sync")();
console.clear();
let qnt = 0
let q = ''
for (i = 0; i < 5; i++){
  q = prompt('Digite SIM OU NÃO:').toLocaleLowerCase();
  if (q == 'sim'){
    qnt +=1
  }
}
switch (qnt){
  case 4:
    console.log('Você é culpado.')
    break;
  case 3:
    console.log('Você é suspeito.')
    break;
  case 2:
    console.log('Você é inocente..')
    break;
}
