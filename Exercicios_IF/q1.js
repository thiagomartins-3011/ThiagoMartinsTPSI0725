/*Enunciado:
 Desenvolva um programa que assuma uma entrada em segundos e a converta para horas, minutos e segundos.
Exemplo:
 Entrada: 3665 segundos
 Saída esperada: 1 hora, 1 minuto e 5 segundos.
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o tempo em segundos: ", function(segundos) {

    segundos = Number(segundos);

    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let restoSegundos = segundos % 60;

    console.log(`${horas} hora(s), ${minutos} minuto(s) e ${restoSegundos} segundo(s).`);

    rl.close();
});