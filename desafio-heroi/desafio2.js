// Definindo o nome do herói
let nomeDoHeroi = "Aragorn";

// Criando uma variável para guardar o nível
let nivel = "";

// Definindo a quantidade de vitórias e derrotas do herói
let vitorias = 10;
let derrotas = 50;


// Função para calcular o saldo de vitórias e derrotas do herói
function calcularVitoriasEDerrotas(vitorias, derrotas) {
    return vitorias - derrotas;
}

function classificarNivelDoHeroi(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else if (vitorias >= 101) {
        return "Imortal";
    } else {
        return "Desconhecido";
    }   
}
// Calculando o saldo de vitórias
let saldoVitorias = calcularVitoriasEDerrotas(vitorias, derrotas);

// Determinando o nível com base no saldo de vitórias

// Mensagem final de saída
console.log(`O Herói de nome ${nomeDoHeroi} tem de saldo de ${saldoVitorias} está no nível de ${classificarNivelDoHeroi(saldoVitorias)}`);
nivel = classificarNivelDoHeroi(saldoVitorias);
