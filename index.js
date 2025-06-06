// Importa o módulo readline para ler dados do terminal (entrada do usuário)
const readline = require("readline");

// Cria a interface para entrada e saída no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que gera um valor aleatório de XP entre 0 e 12000
function gerarXpAleatorio() {
    return Math.floor(Math.random() * 12001); // 0 até 12000
}

// Função que retorna um nome aleatório de herói a partir de uma lista
function escolherNomeAleatorio() {
    const nomesDosHerois = [
        "Gandalf", "Sméagol", "Frodo", "Bilbo", "Aragorn",
        "Sauron", "Galadriel", "Saruman", "Gimli"
    ];
    
    const indiceAleatorio = Math.floor(Math.random() * nomesDosHerois.length);
    return nomesDosHerois[indiceAleatorio];
}

// Função que determina o nível do herói com base na quantidade de XP
function determinarNivelHeroi(xp) {
    const niveisDeXp = [
        "Ferro",       // XP até 1000
        "Bronze",      // 1001 - 2000
        "Prata",       // 2001 - 5000
        "Ouro",        // 5001 - 7000
        "Platina",     // 7001 - 8000
        "Ascendente",  // 8001 - 9000
        "Imortal",     // 9001 - 10000
        "Radiante"     // Acima de 10000
    ];

    if (xp <= 1000) return niveisDeXp[0];
    else if (xp <= 2000) return niveisDeXp[1];
    else if (xp <= 5000) return niveisDeXp[2];
    else if (xp <= 7000) return niveisDeXp[3];
    else if (xp <= 8000) return niveisDeXp[4];
    else if (xp <= 9000) return niveisDeXp[5];
    else if (xp <= 10000) return niveisDeXp[6];
    else return niveisDeXp[7];
}

// Função principal que processa e exibe os dados do herói
function processarHeroi(xp) {
    const nomeHeroi = escolherNomeAleatorio();  // Escolhe nome aleatório
    const nivel = determinarNivelHeroi(xp);     // Determina o nível com base no XP

    // Imprime a mensagem formatada com nome e nível
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`);

    rl.close(); // Encerra a interface de leitura no terminal
}

// Função que pergunta ao usuário se ele quer inserir o XP ou gerar aleatoriamente
function perguntarOpcao() {
    rl.question("Digite 1 para inserir XP manualmente ou 2 para gerar aleatório: ", function (opcao) {
        switch (opcao) {
            case "1":
                solicitarXpManual(); // Se escolheu 1, pede XP manualmente
                break;
            case "2":
                const xpAleatorio = gerarXpAleatorio(); // Gera XP aleatório
                console.log(`XP gerado aleatoriamente: ${xpAleatorio}`);
                processarHeroi(xpAleatorio);
                break;
            default:
                console.log("Opção inválida! Por favor, digite 1 ou 2.\n");
                perguntarOpcao(); // Repete a pergunta se a entrada for inválida
                break;
        }
    });

    // Função auxiliar para pedir XP manualmente e validar se é um número
    function solicitarXpManual() {
        rl.question("Digite o valor de XP do herói: ", function (inputXp) {
            const xp = parseInt(inputXp);
            if (isNaN(xp)) {
                console.log("Valor inválido. Digite um número.\n");
                solicitarXpManual(); // Repete a pergunta se for inválido
            } else {
                processarHeroi(xp); // Se válido, processa o herói
            }
        });
    }
}

// Início do programa
perguntarOpcao();
