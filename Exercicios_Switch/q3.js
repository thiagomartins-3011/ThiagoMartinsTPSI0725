/*Recebe um dicionário com as chaves "tipo" e "valor".
Exibe:
•	“Compra de X€” se tipo for “compra”
•	“Venda de X€” se tipo for “venda”
•	“Pedido desconhecido” caso contrário
Exemplo:
Entrada → {"tipo": "venda", "valor": 250}
Saída → Venda de 250€
*/

function processarPedido(pedido) {

    if (pedido.tipo === "compra") {
        console.log(`Compra de ${pedido.valor}€`);
    }
    else if (pedido.tipo === "venda") {
        console.log(`Venda de ${pedido.valor}€`);
    }
    else {
        console.log("Pedido desconhecido");
    }
}


// Exemplo
let entrada = { tipo: "venda", valor: 250 };

processarPedido(entrada);