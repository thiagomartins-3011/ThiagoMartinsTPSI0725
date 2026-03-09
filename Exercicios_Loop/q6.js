const prompt = require("prompt-sync")();

let contador = 0;
let numero = 2;

while (contador < 10) {

    let primo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        console.log(numero);
        contador++;
    }

    numero++;
}