function microondas2(prato, tempo) {
  let prato1 = "Pipoca";
  let prato2 = "Macarrão";
  let prato3 = "Carne";
  let prato4 = "Feijão";
  let prato5 = "Brigadeiro";

  let tempoPrato1 = 10;
  let tempoPrato2 = 8;
  let tempoPrato3 = 15;
  let tempoPrato4 = 12;
  let tempoPrato5 = 8;

  function verificaTempoPrato(prato) {
    if (
      (prato === prato1 && tempo < tempoPrato1) ||
      (prato === prato2 && tempo < tempoPrato2) ||
      (prato === prato3 && tempo < tempoPrato3) ||
      (prato === prato4 && tempo < tempoPrato4) ||
      (prato === prato5 && tempo < tempoPrato5)
    ) {
      return console.log("Tempo insuficiente");
    } else if (
      (prato === prato1 &&
        tempo >= 2 * tempoPrato1 &&
        tempo < 3 * tempoPrato1) ||
      (prato === prato2 &&
        tempo >= 2 * tempoPrato2 &&
        tempo < 3 * tempoPrato2) ||
      (prato === prato3 &&
        tempo >= 2 * tempoPrato3 &&
        tempo < 3 * tempoPrato3) ||
      (prato === prato4 &&
        tempo >= 2 * tempoPrato4 &&
        tempo < 3 * tempoPrato4) ||
      (prato === prato5 && tempo >= 2 * tempoPrato5 && tempo < 3 * tempoPrato5)
    ) {
      return console.log("Prato queimou");
    } else if (
      (prato === prato1 && tempo >= 3 * tempoPrato1) ||
      (prato === prato2 && tempo >= 3 * tempoPrato2) ||
      (prato === prato3 && tempo >= 3 * tempoPrato3) ||
      (prato === prato4 && tempo >= 3 * tempoPrato4) ||
      (prato === prato5 && tempo >= 3 * tempoPrato5)
    ) {
      return console.log("Kabum");
    } else if (
      prato != prato1 &&
      prato != prato2 &&
      prato != prato3 &&
      prato != prato4 &&
      prato != prato5
    ) {
      return console.log("Prato inexistente");
    } else {
      return console.log("Prato pronto. Bom apetite!");
    }
  }

  switch (prato) {
    case prato1:
      verificaTempoPrato(prato);
      break;
    case prato2:
      verificaTempoPrato(prato);
      break;
    case prato3:
      verificaTempoPrato(prato);
      break;
    case prato4:
      verificaTempoPrato(prato);
      break;
    case prato5:
      verificaTempoPrato(prato);
      break;
  }
}

microondas2("Salame", 33);
