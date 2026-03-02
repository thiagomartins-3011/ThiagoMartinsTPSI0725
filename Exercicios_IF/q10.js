/*Leia 10 números e determine quantos são pares e quantos são ímpares.
Exemplo:
 Entrada: 2, 3, 5, 6, 8, 9, 10, 12, 14, 15
 Saída esperada:
 Pares: 6
 Ímpares: 4
*/

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function contarParesEImpares() {
    let numeros = [];

    for (let i = 0; i < 10; i++) {
        let pergunta = await rl.question(`Digite o número ${i + 1}: `);
        numeros.push(Number(pergunta));
    }

    let pares = 0;
    let impares = 0;

    for (let num of numeros) {
        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`Pares: ${pares}`);
    console.log(`Ímpares: ${impares}`);

    rl.close();
}

contarParesEImpares();