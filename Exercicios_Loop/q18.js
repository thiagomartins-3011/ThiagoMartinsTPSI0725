const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));
let soma = 0;

for (let i = 1; i < numero; i++) {

    if (numero % i === 0) {
        soma += i;
    }

}

if (soma === numero) {
    console.log("Número perfeito");
} else {
    console.log("Não é perfeito");
}