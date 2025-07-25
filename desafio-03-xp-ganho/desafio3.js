// Desafio: Calcular XP ganho com base em dois números fornecidos pelo usuário
// O XP ganho é calculado como: XP = num1 * num2 * 100
// Este código solicita ao usuário dois números e calcula o XP ganho com base na fórmula fornecida.

// Entrada de dados. parseInt(()) é usado para a conversão dos valores de entrada(String) para um valor numérico(int).
const readline = require('readline');

// Criando a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta 1: primeiro número
rl.question('Digite o primeiro número: ', (input1) => {
  let num1 = parseInt(input1); // converte para inteiro

  // Pergunta 2: segundo número
  rl.question('Digite o segundo número: ', (input2) => {
    let num2 = parseInt(input2); // converte para inteiro

    // Cálculo do XP
    const xpGanho = num1 * num2 * 100;

    // Exibe o resultado
    console.log("Você ganhou " + xpGanho + " XP!");

    // Encerra a leitura
    rl.close();
  });
});
