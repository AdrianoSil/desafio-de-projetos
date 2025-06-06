// Importando o módulo readline para ler entradas do usuário no terminal
const readline = require("readline");

// Criando a interface de leitura com o usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Vetor com os nomes dos níveis de XP
const niveisDeXp = [
  "Ferro",       // XP até 1000
  "Bronze",      // XP até 2000
  "Prata",       // XP até 5000
  "Ouro",        // XP até 7000
  "Platina",     // XP até 8000
  "Ascendente",  // XP até 9000
  "Imortal",     // XP até 10000
  "Radiante"     // XP acima de 10000
];

// Vetor com nomes possíveis para o herói
const nomesDosHerois = [
  "Gandalf", "Sméagol", "Frodo", "Bilbo", "Aragorn", 
  "Sauron", "Galadriel", "Saruman", "Gimli"
];

// Função que retorna um nome aleatório do vetor
function escolherNomeAleatorio() {
  const indice = Math.floor(Math.random() * nomesDosHerois.length);
  return nomesDosHerois[indice];
}

// Função que gera um número aleatório de XP entre 0 e 12000
function gerarXpAleatorio() {
  return Math.floor(Math.random() * 12001);
}

// Função que determina o nível com base no valor de XP
function determinarNivelHeroi(xp) {
  if (xp <= 1000) return niveisDeXp[0];
  else if (xp <= 2000) return niveisDeXp[1];
  else if (xp <= 5000) return niveisDeXp[2];
  else if (xp <= 7000) return niveisDeXp[3];
  else if (xp <= 8000) return niveisDeXp[4];
  else if (xp <= 9000) return niveisDeXp[5];
  else if (xp <= 10000) return niveisDeXp[6];
  else return niveisDeXp[7];
}

// Função principal que inicia o programa e pergunta a opção ao usuário
function perguntarOpcao() {
  rl.question("Digite 1 para inserir XP manualmente ou 2 para gerar aleatório: ", function (opcao) {
    if (opcao === "1") {
      // Usuário quer inserir manualmente
      rl.question("Digite o valor de XP do herói: ", function (inputXp) {
        const xp = parseInt(inputXp);
        if (isNaN(xp)) {
          console.log("Valor inválido. Digite um número.");
          perguntarOpcao(); // repete a pergunta
        } else {
          processarHeroi(xp);
        }
      });
    } else if (opcao === "2") {
      // Gera XP aleatório
      const xp = gerarXpAleatorio();
      console.log(`XP gerado aleatoriamente: ${xp}`);
      processarHeroi(xp);
    } else {
      // Opção inválida
      console.log("Opção inválida! Por favor, digite 1 ou 2.\n");
      perguntarOpcao();
    }
  });
}

// Função que monta a mensagem final com nome e nível do herói
function processarHeroi(xp) {
  const nomeHeroi = escolherNomeAleatorio(); // seleciona nome aleatório
  const nivel = determinarNivelHeroi(xp);    // determina nível
  console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
  rl.close(); // encerra a leitura
}

// Inicia o programa
perguntarOpcao();
