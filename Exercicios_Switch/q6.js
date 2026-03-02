/*Recebe um dicionário com as chaves "status" e "tempo_resposta".
Retorna:
•	“Servidor ativo” se o status for “ok”
•	“Servidor lento” se o status for “ok” e o tempo de resposta for maior que 200 ms
•	“Servidor indisponível” se o status for “erro”
•	“Estado desconhecido” caso contrário
Exemplo:
Entrada → {"status": "ok", "tempo_resposta": 350}
Saída → Servidor lento
*/

function verificarServidor(dados) {

    if (dados.status === "ok" && dados.tempo_resposta > 200) {
        return "Servidor lento";
    }
    else if (dados.status === "ok") {
        return "Servidor ativo";
    }
    else if (dados.status === "erro") {
        return "Servidor indisponível";
    }
    else {
        return "Estado desconhecido";
    }
}


// Exemplo
let entrada = { status: "ok", tempo_resposta: 100 };

console.log(verificarServidor(entrada));