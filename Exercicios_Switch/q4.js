/*Analisa um valor e retorna o seu tipo:
•	Número inteiro
•	Número decimal
•	String numérica
•	String textual
•	Lista
•	Tipo desconhecido
Exemplo:
Entrada → [10, 20, 30]
Saída → Lista
*/

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*async function identificarTipo() {
    let valor = await rl.question("Digite um valor: ");
    