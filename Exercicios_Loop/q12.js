const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));
let contador = 0;

for (let i = 1; i < numero; i++) {

    console.log(numero + " + " + i + " = " + (numero + i));
    console.log(numero + " - " + i + " = " + (numero - i));
    console.log(numero + " * " + i + " = " + (numero * i));
    console.log(numero + " / " + i + " = " + (numero / i));

    contador += 4;
}

console.log("Total de operações:", contador);