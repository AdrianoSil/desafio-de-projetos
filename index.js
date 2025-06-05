// Importando o módulo readline do Node.js para ler entradas do terminal
const readline = require("readline");

// Criando a interface de entrada/saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Lista com nomes possíveis para os heróis
const nomesDosHerois = [
    "Gandalf", "Sméagol", "Frodo", "Bilbo", "Aragorn",
    "Sauron", "Galadriel", "Saruman", "Gimli"
];

// Lista com os níveis de XP possíveis
const niveisDeXp = [
    "Ferro", "Bronze", "Prata", "Ouro", "Diamante",
    "Platina", "Ascendente", "Imortal", "Radiante"
];

// Lista com os limites superiores de XP para cada nível
// Exemplo: até 1000 é "Ferro", até 2000 é "Bronze", e assim por diante
const limitesXp = [1000, 2000, 3000, 4000, 5000, 7000, 8000, 10000];

// Função que gera um valor aleatório de XP entre 0 e 11999
function gerarXpAleatorio() {
    return Math.floor(Math.random() * 12000);
}

// Função que determina o nível do herói com base no valor de XP
function determinarNivelHeroi(xp) {
    for (let i = 0; i < limitesXp.length; i++) {
        if (xp <= limitesXp[i]) {
            return niveisDeXp[i]; // Retorna o nível correspondente ao XP
        }
    }
    return niveisDeXp[niveisDeXp.length - 1]; // Retorna "Radiante" se XP > 10000
}

// Função que escolhe aleatoriamente um nome da lista de heróis
function escolherNomeAleatorio() {
    const indice = Math.floor(Math.random() * nomesDosHerois.length);
    return nomesDosHerois[indice];
}

// Função principal que organiza o fluxo do programa
function main() {
    // Função para perguntar ao usuário como deseja informar o XP
    function perguntarOpcao() {
        rl.question("Digite 1 para inserir XP manualmente ou 2 para gerar aleatório: ", function (opcao) {
            if (opcao === "1") {
                // Usuário escolheu inserir manualmente
                rl.question("Digite o valor de XP do herói: ", function (inputXp) {
                    const xp = parseInt(inputXp); // Converte a entrada para inteiro
                    if (isNaN(xp)) {
                        console.log("Valor inválido. Digite um número.");
                        perguntarOpcao(); // Repete a pergunta
                    } else {
                        processarHeroi(xp); // Vai para o processamento final
                    }
                });
            } else if (opcao === "2") {
                // Usuário escolheu gerar XP aleatoriamente
                const xp = gerarXpAleatorio();
                console.log(`XP gerado aleatoriamente: ${xp}`);
                processarHeroi(xp); // Vai para o processamento final
            } else {
                // Opção inválida, pede novamente
                console.log("Opção inválida! Por favor, digite 1 ou 2.\n");
                perguntarOpcao();
            }
        });
    }

    // Função que usa o XP para determinar e exibir o nome e nível do herói
    function processarHeroi(xp) {
        const nomeHeroi = escolherNomeAleatorio(); // Nome aleatório
        const nivel = determinarNivelHeroi(xp);     // Nível baseado no XP

        // Exibição do resultado
        console.log("\n==============================");
        console.log("Herói:", nomeHeroi);
        console.log("XP:", xp);
        console.log("Nível:", nivel);
        console.log("==============================\n");

        rl.close(); // Encerra a leitura do terminal
    }

    // Inicia o processo
    perguntarOpcao();
}

// Executa o programa
main();

