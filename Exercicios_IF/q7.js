/*O sistema de avaliação de uma disciplina tem três provas com pesos diferentes. A primeira tem peso 2, a segunda tem peso 3, e a terceira tem peso 5. Crie um programa para calcular a média final de um aluno e mostrar se ele está APROVADO (nota >= 6) ou REPROVADO (nota < 6).
Exemplo:
 Entrada: Nota1 = 7, Nota2 = 6, Nota3 = 9
 Saída esperada:
 Média: 7.4
 Aprovado
*/

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function calcularMediaFinal() {
    let nota1 = await rl.question("Digite a nota da primeira prova (peso 2): ");
    let nota2 = await rl.question("Digite a nota da segunda prova (peso 3): ");
    let nota3 = await rl.question("Digite a nota da terceira prova (peso 5): ");

    let nota1Num = Number(nota1);
    let nota2Num = Number(nota2);
    let nota3Num = Number(nota3);

    let media = (nota1Num * 2 + nota2Num * 3 + nota3Num * 5) / 10;

    console.log(`Média: ${media.toFixed(1)}`);

    if (media >= 6) {
        console.log("Aprovado");
    }
    else {
        console.log("Reprovado");
    }
    rl.close();
}

calcularMediaFinal();