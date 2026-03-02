/*Crie 2 variáveis (num1 e num2) e leia o valor para cada uma delas. Mostre os valores de forma crescente e decrescente.
 Exemplo:
 Entrada: num1 = 7, num2 = 2
 Saída esperada:
 Crescente: 2, 7
 Decrescente: 7, 2
*/

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function mostrarCrescenteEDecrescente() {
    // Pergunta os números e espera a resposta
    let pergunta1 = await rl.question("Digite o valor de num1: ");
    let pergunta2 = await rl.question("Digite o valor de num2: ");

    // Converte para número
    let num1 = Number(pergunta1);
    let num2 = Number(pergunta2);

    if (num1 < num2) {
        console.log(`Crescente: ${num1}, ${num2}`);
        console.log(`Decrescente: ${num2}, ${num1}`);
    }
    else if (num1 > num2) {
        console.log(`Crescente: ${num2}, ${num1}`);
        console.log(`Decrescente: ${num1}, ${num2}`);
    }
    else {
        console.log("Os números são iguais.");
    }

    rl.close();
}

mostrarCrescenteEDecrescente();