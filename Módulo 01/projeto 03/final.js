const prompt = require("prompt-sync")();
const array = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];
let jogador;
let coluna;
let pontosJogador = 0;
let pontosPc = 0;
let parada;
const player = () => {
  if (jogador == 0 && coluna == 0 && array[0][0] == "-") {
    array[0][0] = "X";
  } else if (jogador == 0 && coluna == 1 && array[0][1] == "-") {
    array[0][1] = "X";
  } else if (jogador == 0 && coluna == 2 && array[0][2] == "-") {
    array[0][2] = "X";
  }
  if (jogador == 1 && coluna == 0 && array[1][0] == "-") {
    array[1][0] = "X";
  } else if (jogador == 1 && coluna == 1 && array[1][1] == "-") {
    array[1][1] = "X";
  } else if (jogador == 1 && coluna == 2 && array[1][2] == "-") {
    array[1][2] = "X";
  }
  if (jogador == 2 && coluna == 0 && array[2][0] == "-") {
    array[2][0] = "X";
  } else if (jogador == 2 && coluna == 1 && array[2][1] == "-") {
    array[2][1] = "X";
  } else if (jogador == 2 && coluna == 2 && array[2][2] == "-") {
    array[2][2] = "X";
  }
};
const comp = () => {
  if (jogador2 == 0 && coluna2 == 0 && array[0][0] == "-") {
    array[0][0] = "O";
  } else if (jogador2 == 0 && coluna2 == 1 && array[0][1] == "-") {
    array[0][1] = "O";
  } else if (jogador2 == 0 && coluna2 == 2 && array[0][2] == "-") {
    array[0][2] = "O";
  }
  if (jogador2 == 1 && coluna2 == 0 && array[1][0] == "-") {
    array[1][0] = "O";
  } else if (jogador2 == 1 && coluna2 == 1 && array[1][1] == "-") {
    array[1][1] = "O";
  } else if (jogador2 == 1 && coluna2 == 2 && array[1][2] == "-") {
    array[1][2] = "O";
  }
  if (jogador2 == 2 && coluna2 == 0 && array[2][0] == "-") {
    array[2][0] = "O";
  } else if (jogador2 == 2 && coluna2 == 1 && array[2][1] == "-") {
    array[2][1] = "O";
  } else if (jogador2 == 2 && coluna2 == 2 && array[2][2] == "-") {
    array[2][2] = "O";
  }
};
while (true) {
  while (true) {
    console.log("   ", 0, "   ", 1, "   ", 2, "   ");
    console.log(0, array[0]);
    console.log(1, array[1]);
    console.log(2, array[2]);
    jogador = +prompt("Digite a linha a sua escolha: ");
    coluna = +prompt("Digite a coluna a sua escolha: ");
    player();
    console.log("   ", 0, "   ", 1, "   ", 2, "   ");
    console.log(0, array[0]);
    console.log(1, array[1]);
    console.log(2, array[2]);
    jogador2 = +prompt("Digite a linha a sua escolha jogador2  ");
    coluna2 = +prompt("Digite a linha a sua escolha:");
    comp();
    if (
      (array[0][0] == "X" && array[0][1] == "X" && array[0][2] == "X") ||
      (array[0][0] == "X" && array[1][0] == "X" && array[2][0] == "X") ||
      (array[0][0] == "X" && array[1][1] == "X" && array[2][2] == "X") ||
      (array[0][2] == "X" && array[1][2] == "X" && array[2][2] == "X") ||
      (array[2][0] == "X" && array[2][1] == "X" && array[2][2] == "X") ||
      (array[0][2] == "X" && array[1][1] == "X" && array[2][0] == "X") ||
      (array[1][0] == "X" && array[1][1] == "X" && array[1][2] == "X") ||
      (array[0][1] == "X" && array[1][1] == "X" && array[2][1] == "X")
    ) {
      console.log("Parabéns!! O jogador 1 Venceu!!");
      pontosJogador++;
      console.log("   ", 0, "   ", 1, "   ", 2, "   ");
      console.log(0, array[0]);
      console.log(1, array[1]);
      console.log(2, array[2]);
      array[0].splice(0, 3, "-", "-", "-");
      array[1].splice(0, 3, "-", "-", "-");
      array[2].splice(0, 3, "-", "-", "-");
      break;
    } else if (
      (array[0][0] == "O" && array[0][1] == "O" && array[0][2] == "O") ||
      (array[0][0] == "O" && array[1][0] == "O" && array[2][0] == "O") ||
      (array[0][0] == "O" && array[1][1] == "O" && array[2][2] == "O") ||
      (array[0][2] == "O" && array[1][2] == "O" && array[2][2] == "O") ||
      (array[2][0] == "O" && array[2][1] == "O" && array[2][2] == "O") ||
      (array[0][2] == "O" && array[1][1] == "O" && array[2][0] == "O") ||
      (array[1][0] == "O" && array[1][1] == "O" && array[1][2] == "O") ||
      (array[0][1] == "O" && array[1][1] == "O" && array[2][2] == "O")
    ) {
      console.log("Parabéns!! O jogador 1 Venceu!!");
      pontosPc++;
      console.log("   ", 0, "   ", 1, "   ", 2, "   ");
      console.log(0, array[0]);
      console.log(1, array[1]);
      console.log(2, array[2]);
      array[0].splice(0, 3, "-", "-", "-");
      array[1].splice(0, 3, "-", "-", "-");
      array[2].splice(0, 3, "-", "-", "-");
      break;
    }
  }
  parada = prompt("Deseja Continuar ? Digite S ou N: ").toLocaleLowerCase();
  if (parada == "n") {
    console.log(`O Jogador 1 fez ${pontosJogador} pontos`);
    console.log(`O Jogador 2 fez ${pontosPc} pontos`);
    if (pontosJogador > pontosPc) {
      console.log("O Jogador 1 Venceu!!");
    } else {
      console.log("O Jogador 2 Venceu!!");
    }
    break;
  }
}
