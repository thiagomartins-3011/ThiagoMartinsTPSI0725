const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;

while (contador < 30) {

    let numero = Number(prompt("Digite número par entre 1 e 50: "));

    if (numero >= 1 && numero <= 50 && numero % 2 === 0) {

        soma += numero;
        contador++;

    } else {

        console.log("Número inválido");

    }

}

console.log("Média:", soma / 30);