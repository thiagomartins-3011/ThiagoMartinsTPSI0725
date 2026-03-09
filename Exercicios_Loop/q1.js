let pares = 0;
let impares = 0;
let numero = 1;

while (pares < 30 || impares < 30) {

    if (numero % 2 == 0 && pares < 30) {
        console.log("Par: " + numero);
        pares++;
    }

    if (numero % 2 != 0 && impares < 30) {
        console.log("Ímpar: " + numero);
        impares++;
    }

    numero++;
}