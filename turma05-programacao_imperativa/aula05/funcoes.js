// 1. Crie uma função que converta polegadas em centímetros.
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function convertPolCent(xPol) {
  let polConvertid = xPol * 2.54;
  return console.log(polConvertid.toFixed(2));
}

convertPolCent(5);

// 2. Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
function convertUrl(textoString) {
  return console.log(`http://www.${textoString}.com.br`);
}

convertUrl("roberto");

// 3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o
// caracter de exclamação ( ! ).
function addExclam(textoAdd) {
  return console.log(`${textoAdd}!`);
}

addExclam("roberto");

// 4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano
// humano, equivale a 7 anos para eles.
function calcIdadeCao(idade) {
  let idadeCalc = idade * 7;
  return console.log(`A idade real do animal é: ${idadeCalc}`);
}

calcIdadeCao(12);

// 5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como
// parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.
function calcHoraTrab(salario) {
  const hora = 160;
  let valorHora = salario / hora;
  return console.log(`O valor da sua hora trabalhada é: R$${valorHora}`);
}

calcHoraTrab(1800);

// 6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em
// centímetros e o peso em quilogramas. Em seguida, execute a função, testando
// diferentes valores.
// *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está
// de acordo com a altura.
function imc(peso, altura) {
  let imcCalc = (peso / (altura * altura)) * 10000;
  return console.log(imcCalc.toFixed(2));
}

imc(100, 174);

// 7. Crie uma função que receba uma string em minúsculas, converta-a em
// maiúsculas e as retorne.
// Investigue o que o método de .toUpperCase() faz.
function convertMaisc(palavraMin) {
  let maiscula = palavraMin.toUpperCase();
  return console.log(maiscula);
}

convertMaisc("jamile");

// 8. Crie uma função que receba um parâmetro e retorne o tipo de dado deste
// parâmetro.
// Dica: Isso te ajudará a entender o que o operador typeof faz.
function tipoParm(x) {
  let tipoDig = typeof x;
  return console.log(`O parâmetro digitado é do tipo: ${tipoDig}`);
}

tipoParm(true);

// 9. Crie uma função pela qual passamos o raio de um círculo e ela retorna a
// circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
