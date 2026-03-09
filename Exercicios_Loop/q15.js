const prompt = require("prompt-sync")();

let contador = 0;

for (let i = 0; i <= 255; i++) {

    console.log(i, String.fromCharCode(i));

    contador++;

    if (contador === 20) {

        contador = 0;

        let continuar = prompt("Continuar? (s/n): ");

        if (continuar === "n") {
            break;
        }

    }

}