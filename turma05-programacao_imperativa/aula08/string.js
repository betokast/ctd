// lenght (conta os caracteres, inclusive os espaços):
let texto1 = "Oi, eu sou o Roberto";
console.log("=========== lenght ===========");
console.log(texto1.length + " caracteres");

// indexOf (indica a posição de uma palavra dentro da cadeia):
let texto2 = "Oi, eu sou o Roberto";
console.log("=========== indexOf ===========");
console.log(texto2);
console.log(texto2.indexOf("Roberto"));

// slice (retorna determinada palavra da cadeia):
let texto3 = "Oi, eu sou o Roberto";
console.log("=========== slice ===========");
console.log(texto3);
console.log(texto3.slice(0, 2));

// replace (troca uma palavra por outra):
let job = "Sou programador php";
console.log("=========== replace ===========");
console.log(job);
console.log(job.replace("php", "javascript"));

// trim (remove espaços):
let texto4 = "    Olá, este é um texto para mostra o uso do trim.";
console.log("=========== trim ===========");
console.log(texto4);
console.log(texto4.trim());

// split (o método pega cada elemento de uma cadeia, e separa a partir de um parâmetro informado):
let texto5 =
  "Então, este é um exemplo do uso do método split. Os parâmetro para separar é o espaço.";
console.log("=========== split ===========");
console.log(texto5);
console.log(texto5.split(" "));
