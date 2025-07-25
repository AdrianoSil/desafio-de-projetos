const readline = require('readline');

// Interface de entrada/saída via terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Exibe opções para o usuário
console.log("Escolha as opções 1, 2, 4 ou 5 para escolher o seu tipo de Pokémon:");

rl.question("Digite o número da sua escolha: ", (input) => {
  const escolhaDoTreinador = parseInt(input);
  let pokemonEscolhido;

  if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
  } else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
  } else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
  } else if (escolhaDoTreinador === 5) {
    pokemonEscolhido = "Mewtwo";
  } else {
    console.log("Escolha inválida!");
  }

  if (pokemonEscolhido) {
    console.log("Você escolheu o " + pokemonEscolhido + " como seu Pokémon inicial.");
  }

  rl.close(); // Finaliza o readline
});
