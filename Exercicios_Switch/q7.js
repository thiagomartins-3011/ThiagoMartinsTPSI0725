/*Recebe um dicionário com as chaves "categoria" e "preco".
Retorna:
•	“Produto de luxo” se categoria for “eletrônico” e preço acima de 1000
•	“Produto comum” se categoria for “eletrônico” e preço até 1000
•	“Produto alimentar” se categoria for “alimento”
•	“Categoria desconhecida” caso contrário
Exemplo:
Entrada → {"categoria": "eletrônico", "preco": 1500}
Saída → Produto de luxo
*/

function classificarProduto(produto) {

    if (produto.categoria === "eletrônico" && produto.preco > 1000) {
        return "Produto de luxo";
    } 
    else if (produto.categoria === "eletrônico" && produto.preco <= 1000) {
        return "Produto comum";
    } 
    else if (produto.categoria === "alimento") {
        return "Produto alimentar";
    } 
    else {
        return "Categoria desconhecida";
    }
}


// Exemplo de uso
let entrada = { categoria: "eletrônico", preco: 1500 };

console.log(classificarProduto(entrada));
