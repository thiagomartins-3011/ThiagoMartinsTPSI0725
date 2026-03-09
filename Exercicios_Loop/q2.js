const prompt = require("prompt-sync")();

for (let i = 1; i <= 10; i++) {

    let numero = parseInt(prompt("Digite um número: "));

    if (numero % 2 === 0) {
        console.log(numero + " é PAR");
    } else {
        console.log(numero + " é ÍMPAR");
    }

}