/* Desenvolva um programa que analise 3 valores inteiros e informe qual o maior e qual o menor deles.
Exemplo:
 Entrada: num1 = 5, num2 = 2, num3 = 8
 Saída esperada:
 Maior: 8
 Menor: 2
*/

function encontrarMaiorEMenor(num1, num2, num3) {
    let maior;
    let menor;
    
    if (num1 > num2 && num1 > num3){
        maior = num1;
    }
    else if (num2 > num1 && num2 > num3) {
        maior = num2;
    }
    else {
        maior = num3;
    }

    if (num1 < num2 && num1 < num3) {
        menor = num1;
    }
    else if (num2 < num1 && num2 < num3) {
        menor = num2;
    }
    else {
        menor = num3;
    }

    if (num1 === num2 && num1 === num3) {
        console.log("Todos os números são iguais.");
        return;
    }
    console.log(`Maior: ${maior}`);
    console.log(`Menor: ${menor}`);
}

encontrarMaiorEMenor(10, 10, 10);