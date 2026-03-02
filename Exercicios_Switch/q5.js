/*Recebe uma mensagem e retorna:
•	“Saudação” se for “olá” ou “bom dia”
•	“Pergunta” se terminar com “?”
•	“Despedida” se contiver “tchau” ou “adeus”
•	“Mensagem genérica” caso contrário
Exemplo:
Entrada → “Tudo bem?”
Saída → Pergunta
*/

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function analisarMensagem() {
    let mensagem = await rl.question("Digite uma mensagem: ");

    if (mensagem.toLowerCase() === "olá" || mensagem.toLowerCase() === "bom dia") {
        console.log("Saudação");
    } else if (mensagem.endsWith("?")) {
        console.log("Pergunta");
    } else if (mensagem.toLowerCase().includes("tchau") || mensagem.toLowerCase().includes("adeus")) {
        console.log("Despedida");
    } else {
        console.log("Mensagem genérica");
    }
    rl.close();
}

analisarMensagem();