const prompt = require("prompt-sync")();
console.clear();
const jokenpo = ["pedra", "papel", "tesoura"];
let rodadas = 0;
let cont;
let vitoriasjogador = 0;
let vitoriaspc = 0;
let empate = 0;
let opção = "";
let computador = "";
console.log("Seja bem - vindo!!");
console.log("1 , 2, 3 e JokenPô!!!");
while (true) {
  rodadas = +prompt("Quantas rodadas deseja jogar?");
  vitoriasjogador = 0;
  vitoriaspc = 0;
  empate = 0;
  for (i = 0; i < rodadas; i++) {
    opção = prompt("Pedra, Papel ou Tesoura?").toLocaleLowerCase();
    escolha = Math.floor(Math.random() * 3);
    computador = jokenpo[escolha];
    while (opção != "pedra" && opção != "tesoura" && opção != "papel") {
      console.log("Opção inválida, digite novamente: ");
      opção = prompt("Pedra, Papel ou Tesoura?").toLocaleLowerCase();
    }
    if (opção == "pedra" && computador == "tesoura") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Jogador Venceu!");
      vitoriasjogador++;
    } else if (opção == "pedra" && computador == "papel") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Computador Venceu!");
      vitoriaspc++;
    } else if (opção == "pedra" && computador == "pedra") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Ninguém venceu!");
      empate++;
    } else if (opção == "papel" && computador == "tesoura") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Computador Venceu!");
      vitoriaspc++;
    } else if (opção == "papel" && computador == "pedra") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Jogador Venceu!");
      vitoriasjogador++;
    } else if (opção == "papel" && computador == "papel") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Ninguém Venceu!");
      empate++;
    } else if (opção == "tesoura" && computador == "pedra") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Computador Venceu!");
      vitoriaspc++;
    } else if (opção == "tesoura" && computador == "papel") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Jogador Venceu!");
      vitoriasjogador++;
    } else if (opção == "tesoura" && computador == "tesoura") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Ninguém Venceu!");
      empate++;
    }
  }
  console.log(
    `O jogador venceu: ${vitoriasjogador} rodadas e o Computador venceu: ${vitoriaspc} rodadas`
  );
  console.log(`E ${empate} rodadas empatadas`);
  if (vitoriasjogador > vitoriaspc) {
    console.log(`O Grande Campeão é Jogador, com ${vitoriasjogador} vitórias.`);
  } else if (vitoriasjogador == vitoriaspc) {
    console.log(`Ninguém venceu!Empate!!`);
  } else {
    console.log(`O Grande Campeão é o computador, com ${vitoriaspc} vitórias.`);
  }
  cont = prompt("Deseja continuar? [S/N]: ").toLowerCase();
  if (cont == "n") {
    break;
  }
}
