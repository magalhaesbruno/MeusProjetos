const prompt = require("prompt-sync")();
console.clear();
const personagem = prompt("Digite o nome do seu personagem: ");
console.log("A jornada do Heroi");
console.log();
console.log(`Olá ${personagem},somos guerreiros inter-dimensionais, vinhemos de um futuro caótico e precisamos de você para que seja possa nos auxiliar nessa nova missão, se tudo der errado ficaremos presos ao 
passado e com isso em poucos dias o mundo irá entrar em colpaso e o mesmo irá se chocar com um meteoro, então sua ajuda será de suma importância para que o mundo consiga viver em paz.`);
console.log("Por favor, responda apenas com SIM OU NÃO.");
let respostas = [];
q1 = prompt("Você sabe configurar um canhão de prótons?").toLocaleLowerCase();
if (q1 == 'sim'){
  respostas.push('sim')
}
q2 = prompt("Você sabe configurar um canhão de prótons?").toLocaleLowerCase();
if (q2 == 'sim'){
  respostas.push('sim')
}
q3 = prompt(`Você tem conhecimento para  consertar os motores de uma nave?`).toLocaleLowerCase();
if (q3 == 'sim'){
  respostas.push('sim')
}
q4 = prompt(`Possui conhecimento sobre viagens interdimensionais?`).toLocaleLowerCase();
if (q4 == 'sim'){
  respostas.push('sim')
}
q5 = prompt(`Você está pronto para se sacrificar em prol da humanidade?`).toLocaleLowerCase();
if (q5 == 'sim'){
  respostas.push('sim')
}
switch (respostas.length){
  case 0:
    console.log(`Você falhou miseravelmente ${personagem}, agora viva com a destruição do mundo em suas mãos.`)
    break;
  case 1:
    console.log(`Você é um covarde ${personagem}, fugir não adianta nada, iremos morrer assim.`)
    break;
  case 2:
    console.log(`Você é um covarde ${personagem}, fugir não adianta nada, iremos morrer assim.`)
    break;
  case 3:
    console.log(`Após diversas tentativas você quase conseguiu ${personagem}, mas não foi o suciente, estamos condenados a morte.`)  
    break;
  case 4:
    console.log(`Você conseguiu ${personagem}, porém, custou sua vida.`)
    break;
  case 5:
    console.log(`Parabéns ${personagem}, você destruiu o meteoro facilmente, talvez você deva se tornar um viajante inter-dimensional.`)
    break;
}
