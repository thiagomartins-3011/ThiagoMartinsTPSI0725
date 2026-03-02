/*Crie um programa que leia a nota de 10 alunos (notas de 0 a 20), calcule a média das notas e mostre a média. Além disso, informe quantos alunos ficaram com a nota igual ou acima da média. */

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function calcularMedia() {
    let notas = [];

    for (let i = 0; i < 10; i++) {
        let notaStr = await rl.question(`Digite a nota do aluno ${i + 1} (0 a 20): `);
        notas[i] = Number(notaStr);
    }

    let somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
    let media = somaNotas / 10;

    let alunosAcimaMedia = notas.filter(nota => nota >= media).length;

    console.log(`Média das notas: ${media.toFixed(2)}`);
    console.log(`Número de alunos com nota igual ou acima da média: ${alunosAcimaMedia}`);

    rl.close();
}

calcularMedia();