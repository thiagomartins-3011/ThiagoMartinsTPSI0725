/* Desenvolva um Programa que leia o saldo inicial de um cliente de banco e leia também o valor de um cheque. Analise se o cheque pode ser descontado. Se o cheque não puder ser descontado, mostre essa informação, caso contrário, desconte o cheque e informe o saldo atualizado.
Exemplo:
 Entrada: Saldo = 500, Cheque = 300
 Saída esperada:
 Cheque descontado, saldo: 200
*/

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function analisarCheque() {
    let saldo = await rl.question("Digite o saldo inicial: ");
    let cheque = await rl.question("Digite o valor do cheque: ");

    let saldoNum = Number(saldo);
    let chequeNum = Number(cheque);

    if (chequeNum > saldoNum) {
        console.log("Cheque não pode ser descontado, saldo insuficiente.");
    }
    else {
        let saldoAtualizado = saldoNum - chequeNum;
        console.log(`Cheque descontado, saldo: ${saldoAtualizado}`);
    }
    rl.close();
}

analisarCheque();