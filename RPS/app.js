const choices = ['rock', 'paper', 'scissor'];
const playerDisplayTag = document.getElementById('playerDisplay');
const computerDiplayTag = document.getElementById('computerDiplay');
const winerDisplayTag = document.getElementById('winerDisplay');

function playGame(playerChoise) {
  const computerChoise = choices[Math.floor(Math.random() * 3)];
  let result = '';
  if (playerChoise === computerChoise) {
    result = 'Draw🤝';
  } else {
    switch (playerChoise) {
      case 'rock':
        result = computerChoise === 'scissor' ? 'You Win!' : 'You Lose!';
        break;
      case 'paper':
        result = computerChoise === 'rock' ? 'You Win!' : 'You Lose!';
        break;
      case 'scissor':
        result = computerChoise === 'paper' ? 'You Win!' : 'You Lose!';
        break;
    }
  }
  playerDisplayTag.textContent = `PLAYER: ${playerChoise}`;
  computerDiplayTag.textContent = `COMPUTER: ${computerChoise}`;
  winerDisplayTag.textContent = result;

  winerDisplayTag.classList.remove('greentext', 'redtext', 'draw');

  switch (result) {
    case 'You Win!':
      winerDisplayTag.classList.add('greentext');
      break;
    case 'You Lose!':
      winerDisplayTag.classList.add('redtext');
      break;
    case 'Draw🤝':
      winerDisplayTag.classList.add('draw');
  }
}
