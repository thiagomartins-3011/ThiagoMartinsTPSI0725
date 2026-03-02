/*Cria um programa que receba o nome de um dia da semana e diga se é dia útil ou fim de semana.
Exemplo:
Entrada → domingo
Saída → Fim de semana
*/

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function verificarDiaDaSemana() {
    let dia = await rl.question("Digite um dia da semana: ");

    switch (dia.toLowerCase()) {
        case "segunda-feira":
        case "terça-feira":
        case "quarta-feira":
        case "quinta-feira":
        case "sexta-feira":
            console.log("Dia útil");
            break;
        case "sábado":
        case "domingo":
            console.log("Fim de semana");
            break;
        default:
            console.log("Entrada inválida. Por favor, digite um dia da semana válido.");
    }
    rl.close();
}

verificarDiaDaSemana();