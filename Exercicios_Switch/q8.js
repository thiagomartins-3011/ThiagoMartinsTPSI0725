/*Recebe uma operação (em texto) e dois números.
Operações válidas: "soma", "subtrai", "multiplica", "divide".
Exemplo:
Entrada →
Operação: "divide"
Número 1: 20
Número 2: 4
Saída → 5
*/

function calcular(operacao, num1, num2) {

    switch (operacao) {

        case "soma":
            return num1 + num2;

        case "subtrai":
            return num1 - num2;

        case "multiplica":
            return num1 * num2;

        case "divide":
            if (num2 === 0) {
                return "Erro: divisão por zero";
            }
            return num1 / num2;

        default:
            return "Operação inválida";
    }
}


// Exemplo
console.log(calcular("multiplica", 20, 4));