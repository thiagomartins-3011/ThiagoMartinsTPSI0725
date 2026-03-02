/* Uma loja oferece descontos de acordo com o valor da compra:
10% para compras até 200,00€.
15% para compras entre 200,01€ e 500,00€.
20% para compras acima de 500,00€.
 Desenvolva um Programa que leia o nome do cliente e o valor da compra e mostre o valor do desconto e o valor total a pagar.
Exemplo:
 Entrada: Cliente: João, Compra: 350
 Saída esperada:
 Nome: João
 Compra: 350,00€
 Desconto: 52,50€
 Total a pagar: 297,50€
*/

const readline = require("readline/promises");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function calcularDesconto(nome, compra) {
    let desconto = 0;
    let totalAPagar = compra;

    if (compra <= 200) {
        desconto = compra * 0.10;
    } else if (compra >= 200.01 &&compra <= 500) {
        desconto = compra * 0.15;
    } else {
        desconto = compra * 0.20;
    }

    totalAPagar = compra - desconto;

    console.log(`Nome: ${nome}`);
    console.log(`Compra: ${compra.toFixed(2)}€`);
    console.log(`Desconto: ${desconto.toFixed(2)}€`);
    console.log(`Total a pagar: ${totalAPagar.toFixed(2)}€`);
}

async function main() {
    let nome = await rl.question("Digite o nome do cliente: ");
    let compraStr = await rl.question("Digite o valor da compra: ");
    let compra = Number(compraStr);

    await calcularDesconto(nome, compra);

    rl.close();
}

main();