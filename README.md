// Importando o módulo readline para interações com o terminal
const readline = require("readline");

// Criando a interface de entrada/saída do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lista com nomes fictícios de heróis
const nomesDosHerois = [
    "Gandalf", "Sméagol", "Frodo", "Bilbo", "Aragorn",
    "Sauron", "Galadriel", "Saruman", "Gimli"
];

// Lista com os níveis de experiência
const niveisDeXp = [
    "Ferro", "Bronze", "Prata", "Ouro", "Diamante",
    "Platina", "Ascendente", "Imortal", "Radiante"
];

// Lista com os limites máximos de XP para cada nível correspondente
const limitesXp = [1000, 2000, 3000, 4000, 5000, 7000, 8000, 10000];

// Função que gera um número aleatório de XP entre 0 e 11999
function gerarXpAleatorio() {
    return Math.floor(Math.random() * 12000);
}

// Função que determina o nível do herói com base em seu XP
function determinarNivelHeroi(xp) {
    for (let i = 0; i < limitesXp.length; i++) {
        if (xp <= limitesXp[i]) {
            return niveisDeXp[i];
        }
    }
    // Se o XP for maior que todos os limites, retorna o último nível (Radiante)
    return niveisDeXp[niveisDeXp.length - 1];
}

// Função que escolhe um nome aleatório da lista de heróis
function escolherNomeAleatorio() {
    const indice = Math.floor(Math.random() * nomesDosHerois.length);
    return nomesDosHerois[indice];
}

// Função principal que gerencia o fluxo do programa
function main() {

    // Solicita ao usuário o tipo de entrada de XP
    function perguntarOpcao() {
        rl.question("Digite 1 para inserir XP manualmente ou 2 para gerar aleatório: ", function (opcao) {
            if (opcao === "1") {
                rl.question("Digite o valor de XP do herói: ", function (inputXp) {
                    const xp = parseInt(inputXp);
                    if (isNaN(xp)) {
                        console.log("Valor inválido. Digite um número.\n");
                        perguntarOpcao();
                    } else {
                        processarHeroi(xp);
                    }
                });
            } else if (opcao === "2") {
                const xp = gerarXpAleatorio();
                console.log(`XP gerado aleatoriamente: ${xp}`);
                processarHeroi(xp);
            } else {
                console.log("Opção inválida! Por favor, digite 1 ou 2.\n");
                perguntarOpcao();
            }
        });
    }

    // Processa e exibe o resultado final com nome e nível do herói
    function processarHeroi(xp) {
        const nomeHeroi = escolherNomeAleatorio();
        const nivel = determinarNivelHeroi(xp);

        // Nova mensagem de saída personalizada
        console.log(`\nO Herói de nome ${nomeHeroi} está no nível de ${nivel}.\n`);

        rl.close();
    }

    // Inicia a aplicação
    perguntarOpcao();
}

// Executa o programa
main();
