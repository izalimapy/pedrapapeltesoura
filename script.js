// Função para obter a escolha do computador
function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    return choices[Math.floor(Math.random() * 3)];
  }
  
  // Função para determinar o vencedor
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "Empate!";
    } else if (
      (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
      (playerChoice === 'papel' && computerChoice === 'pedra') ||
      (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
      return "Você ganhou!";
    } else {
      return "Você perdeu.";
    }
  }
  
  // Adicionar event listeners aos botões
  document.getElementById('pedra').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('pedra', computerChoice);
    document.getElementById('result').textContent = `Você escolheu Pedra. O computador escolheu ${computerChoice}. ${result}`;
  });
  
  document.getElementById('papel').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('papel', computerChoice);
    document.getElementById('result').textContent = `Você escolheu Papel. O computador escolheu ${computerChoice}. ${result}`;
  });
  
  document.getElementById('tesoura').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('tesoura', computerChoice);
    document.getElementById('result').textContent = `Você escolheu Tesoura. O computador escolheu ${computerChoice}. ${result}`;
  });
