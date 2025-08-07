# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"



# EXPLICAÇÃO PASSO A PASSO DA SOLUÇÃO

🪪 Nome do Herói
Decisão: usar um nome aleatório de um vetor.

Motivo: evita a repetição e torna a saída mais interessante/variada para testes automáticos e demonstrações.

🧮 Entrada de XP
Decisão: permitir duas opções: entrada manual ou valor aleatório.

Motivo: facilita testes e atende diferentes perfis de uso (usuário que quer testar limites ou deixar aleatório).

🧠 Classificação de Nível
Decisão: usar if/else com intervalos bem definidos.

Motivo: é a forma mais legível e direta para lidar com faixas de valor numéricas sem sobreposição. Exemplo:

📢 Mensagem Final
Decisão: interpolar strings com template literals.

Motivo: facilita a leitura e evita concatenação excessiva.

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

🔁 Repetição em caso de entrada inválida
Decisão: usar while para repetir caso a opção não seja 1 ou 2.

Motivo: garante robustez na interação com o usuário, evitando falhas.
