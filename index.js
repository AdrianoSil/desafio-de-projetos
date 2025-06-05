const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lista de nomes e níveis
const nomesDosHerois = [
    "Gandalf", "Sméagol", "Frodo", "Bilbo", "Aragorn",
    "Sauron", "Galadriel", "Saruman", "Gimli"
];

const niveisDeXp = [
    "Ferro", "Bronze", "Prata", "Ouro", "Diamante",
    "Platina", "Ascendente", "Imortal", "Radiante"
];

const limitesXp = [1000, 2000, 3000, 4000, 5000, 7000, 8000, 10000];

// Funções
function gerarXpAleatorio() {
    return Math.floor(Math.random() * 12000);
}

function determinarNivelHeroi(xp) {
    for (let i = 0; i < limitesXp.length; i++) {
        if (xp <= limitesXp[i]) {
            return niveisDeXp[i];
        }
    }
    return niveisDeXp[niveisDeXp.length - 1];
}

function escolherNomeAleatorio() {
    const indice = Math.floor(Math.random() * nomesDosHerois.length);
    return nomesDosHerois[indice];
}

// Função principal
function main() {
    function perguntarOpcao() {
        rl.question("Digite 1 para inserir XP manualmente ou 2 para gerar aleatório: ", function (opcao) {
            if (opcao === "1") {
                rl.question("Digite o valor de XP do herói: ", function (inputXp) {
                    const xp = parseInt(inputXp);
                    if (isNaN(xp)) {
                        console.log("Valor inválido. Digite um número.");
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

    function processarHeroi(xp) {
        const nomeHeroi = escolherNomeAleatorio();
        const nivel = determinarNivelHeroi(xp);

        console.log("\n==============================");
        console.log("Herói:", nomeHeroi);
        console.log("XP:", xp);
        console.log("Nível:", nivel);
        console.log("==============================\n");

        rl.close();
    }

    // Início
    perguntarOpcao();
}

// Executar
main();
