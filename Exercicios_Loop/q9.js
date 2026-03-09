const prompt = require("prompt-sync")();

let numero;

do {

    numero = Number(prompt("Digite um número entre 1 e 100: "));

} while (numero < 1 || numero > 100);

console.log("Número válido:", numero);