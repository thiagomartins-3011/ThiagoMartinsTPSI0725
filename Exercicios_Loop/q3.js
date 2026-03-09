const prompt = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 10; i++) {

    let nota = Number(prompt("Digite a nota " + i + ": "));
    soma += nota;

}

let media = soma / 10;

console.log("Média:", media);