/*Lê uma nota (0–100) e retorna uma classificação:
•	90 ou mais → Excelente
•	70–89 → Bom
•	50–69 → Suficiente
•	Abaixo de 50 → Insuficiente
Exemplo:
Entrada → Bom
Saída →  70-89
*/

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function classificarNota() {
    let nota = await rl.question("Digite uma nota (0-100): ");
    nota = Number(nota);

    if (nota >= 90) {
        console.log("Excelente");
    } else if (nota >= 70) {
        console.log("Bom");
    } else if (nota >= 50) {
        console.log("Suficiente");
    } else {
        console.log("Insuficiente");
    }

    rl.close();
}

classificarNota();