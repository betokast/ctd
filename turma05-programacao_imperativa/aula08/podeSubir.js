function podeSubir(altura, acomp) {
  if (altura > 1.4 && altura < 2) {
    return console.log("Acesso autorizado");
  } else if (altura > 1.2 && altura < 1.4 && acomp == true) {
    return console.log("Acesso autorizado com acompanhante");
  } else {
    return console.log("Acesso não autorizado");
  }
}

podeSubir(1.8, false);
