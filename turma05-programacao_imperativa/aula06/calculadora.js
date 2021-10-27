//Calculadora - Nível I

//1 - Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function somar(x, y, z) {
  let soma = x + y;
  return soma;
}

//2 - Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtrair(x, y) {
  let subtracao = x - y;
  return subtracao;
}

//3 - Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicar(x, y) {
  let multiplica = x * y;
  return multiplica;
}

//4 - Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function dividir(x, y) {
  let divid = x / y;
  return divid;
}

//==============================================================================================================================
//Calculadora - Nível II

//1 - Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por
//ele mesmo, ou seja, ao quadrado. Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado
//do parâmetro inserido em power().
//Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().:
function quadradoDoNumero(num) {
  let numQuad = multiplicar(num, num);

  return numQuad;
}

//2 - Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
//Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
function mediaDeTresNumeros(val1, val2, val3) {
  let mediaTres = val1 + val2 + val3;

  return dividir(mediaTres, 3).toFixed(2);
}

//3 - Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular,
//e que deverá retornar x% de totalPorcentagem. Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300).
//Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
function calculaPorcentagem(total, porcent) {
  let calcPorctMult = multiplicar(total, porcent);
  let calcPorctDiv = dividir(calcPorctMult, 100);
  let calcPorcent = console.log(`${calcPorctDiv}%`);

  return calcPorcent;
}

//4 - Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em
//relação ao segundo parâmetro. Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
function geradorDePorcentagem(porcent1, total2) {
  let calcPorctDiv = dividir(porcent1, total2);
  let calcPorctMult = multiplicar(calcPorctDiv, 100);

  let calcPorcent = console.log(
    `O valor ${porcent1} representa ${calcPorctMult}% de ${total2}`
  );

  return calcPorcent;
}

//==============================================================================================================================
console.log("-------------- Teste de Operações / Calculadora --------------");

console.log("Resultado soma: " + somar(5, 15));
console.log("Resultado subtração: " + subtrair(35, 10));
console.log("Resultado multiplicação: " + multiplicar(7, 7));
console.log("Resultado divisão: " + dividir(50, 5));
console.log("Resultado divisão: " + dividir(0, 2));
console.log("Quadrado do número digitado: " + quadradoDoNumero(6));
console.log("Média de três: " + mediaDeTresNumeros(10, 7, 5));
calculaPorcentagem(300, 15);
geradorDePorcentagem(2, 200);
