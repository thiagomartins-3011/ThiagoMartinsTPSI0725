/*Ler 3 valores inteiros e apresentar os valores dispostos em ordem crescente e decrescente.
Exemplo:
 Entrada: num1 = 4, num2 = 9, num3 = 2
 Saída esperada:
 Crescente: 2, 4, 9
 Decrescente: 9, 4, 2
*/

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function mostrarOrdemCrescenteEDecrescente() {
    let pergunta1 = await rl.question("Digite o valor de num1: ");
    let pergunta2 = await rl.question("Digite o valor de num2: ");
    let pergunta3 = await rl.question("Digite o valor de num3: ");

    let num1 = Number(pergunta1);
    let num2 = Number(pergunta2);
    let num3 = Number(pergunta3);

    // Ordenar os números em ordem crescente
    let crescente = [num1, num2, num3].sort((a, b) => a - b);
    
    // Ordenar os números em ordem decrescente
    let decrescente = [num1, num2, num3].sort((a, b) => b - a);

    console.log(`Crescente: ${crescente[0]}, ${crescente[1]}, ${crescente[2]}`);
    console.log(`Decrescente: ${decrescente[0]}, ${decrescente[1]}, ${decrescente[2]}`);

    rl.close();
}

mostrarOrdemCrescenteEDecrescente();