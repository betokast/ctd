function microondas(opcao, tempo) {
  let opcao1 = "Pipoca";
  let opcao2 = "Macarrão";
  let opcao3 = "Carne";
  let opcao4 = "Feijão";
  let opcao5 = "Brigadeiro";

  if (opcao === opcao1 && tempo >= 3 * 10) {
    return console.log("Kabum!!");
  } else if (opcao === opcao1 && tempo >= 2 * 10) {
    return console.log("Prato queimou");
  } else if (opcao === opcao1 && tempo < 10) {
    return console.log("Tempo insuficiente");
  } else if (opcao === opcao2 && tempo >= 3 * 8) {
    return console.log("Kabum!!");
  } else if (opcao === opcao2 && tempo >= 2 * 8) {
    return console.log("Prato queimou");
  } else if (opcao === opcao2 && tempo < 8) {
    return console.log("Tempo insuficiente");
  } else if (opcao === opcao3 && tempo >= 3 * 15) {
    return console.log("Kabum!!");
  } else if (opcao === opcao3 && tempo >= 2 * 15) {
    return console.log("Prato queimou");
  } else if (opcao === opcao3 && tempo < 15) {
    return console.log("Tempo insuficiente");
  } else if (opcao === opcao4 && tempo >= 3 * 12) {
    return console.log("Kabum!!");
  } else if (opcao === opcao4 && tempo >= 2 * 12) {
    return console.log("Prato queimou");
  } else if (opcao === opcao4 && tempo < 12) {
    return console.log("Tempo insuficiente");
  } else if (opcao === opcao5 && tempo >= 3 * 8) {
    return console.log("Kabum!!");
  } else if (opcao === opcao5 && tempo >= 2 * 8) {
    return console.log("Prato queimou");
  } else if (opcao === opcao5 && tempo < 8) {
    return console.log("Tempo insuficiente");
  } else if (
    opcao != opcao1 &&
    opcao != opcao2 &&
    opcao != opcao3 &&
    opcao != opcao4 &&
    opcao != opcao5
  ) {
    return console.log("Prato inexistente");
  } else {
    return console.log("Prato pronto. Bom apetite!");
  }
}

microondas("Carne", 12);
