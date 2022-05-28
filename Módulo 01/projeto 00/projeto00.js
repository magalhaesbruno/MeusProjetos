const prompt = require("prompt-sync")();
console.clear();
console.log(
  `Olá, houve um assassinato na cozinha, e estamos investigando o caso`
);
console.log("Por favor, responda apenas com SIM OU NÃO.");
let respostas = [];
q1 = prompt("Você estava na piscina às 23:10h? ").toLocaleLowerCase();
if (q1 == "sim") {
  respostas.push("sim");
}
q2 = prompt("Você fuma? ").toLocaleLowerCase();
if (q2 == "sim") {
  respostas.push("sim");
}
q3 = prompt(`conhece a residência? `).toLocaleLowerCase();
if (q3 == "sim") {
  respostas.push("sim");
}
q4 = prompt(`Você é destro? `).toLocaleLowerCase();
if (q4 == "sim") {
  respostas.push("sim");
}
q5 = prompt(`Você sabe quem foi a vitíma? `).toLocaleLowerCase();
if (q5 == "sim") {
  respostas.push("sim");
}
switch (respostas.length) {
  case 0:
    console.log(`Você é inocente, está liberado.`);
    break;

  case 1:
    console.log(`Você é inocente, está liberado.`);
    break;
  case 2:
    console.log(`Você é inocente, está liberado.`);
    break;
  case 3:
    console.log(`Você a partir de agora é um suspeito, não saia da cidade.`);
    break;
  case 4:
    console.log(`Você é o culpado, está preso`);
    break;
  case 5:
    console.log(`Você é o culpado, está preso`);
    break;
}
