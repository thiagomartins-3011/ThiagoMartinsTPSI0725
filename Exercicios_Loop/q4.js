const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));
let primo = true;

for (let i = 2; i < numero; i++) {

    if (numero % i === 0) {
        primo = false;
        break;
    }

}

if (numero > 1 && primo) {
    console.log("Número primo");
} else {
    console.log("Não é primo");
}