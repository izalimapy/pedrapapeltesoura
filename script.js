// Função para obter a escolha do computador
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
  }
  
  // Função para determinar o vencedor
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "Empate!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return "Você ganhou!";
    } else {
      return "Você perdeu.";
    }
  }
  
  // Adicionar event listeners aos botões
  document.getElementById('rock').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('rock', computerChoice);
    document.getElementById('result').textContent = `Você escolheu Pedra. O computador escolheu ${computerChoice}. ${result}`;
  });
  
  document.getElementById('paper').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('paper', computerChoice);
    document.getElementById('result').textContent = `Você escolheu Papel. O computador escolheu ${computerChoice}. ${result}`;
  });
  
  document.getElementById('scissors').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('scissors', computerChoice);
    document.getElementById('result').textContent = `Você escolheu Tesoura. O computador escolheu ${computerChoice}. ${result}`;
  });