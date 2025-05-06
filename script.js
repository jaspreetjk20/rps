//score variables
let playerScore = 0;
let computerScore = 0;

//DOM's
const container = document.querySelector('#container');
const results = document.querySelector('#results');
const playerDisplay = document.querySelector('#PLAYER');
const computerDisplay = document.querySelector('#COMPUTER');
const playerSymbol = document.querySelector('#player-choice');
const computerSymbol = document.querySelector('#computer-choice');

//buttons
const rockbn = document.querySelector('#rock');
const paperbn = document.querySelector('#paper');
const scissorbn = document.querySelector('#scissors');

//emoji
const emoji = {rock: '✊', paper: '✋', scissors: '✌️'};


//function for computerchoice input
function getComputerChoice(){
const choices = ['rock', 'paper', 'scissors'];
return choices[Math.floor(Math.random()*3)];
}

//function for roundplay
function playRound(playerChoice){
const computerChoice = getComputerChoice();
playerSymbol.textContent = emoji[playerChoice];
computerSymbol.textContent = emoji[computerChoice];
let res = '';
if(playerChoice == computerChoice)
res = `It is a tie!`;
else if((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissors' && computerChoice == 'paper')){
playerScore++;
res = `You win! ${playerChoice} beats ${computerChoice}`;  
}
else{
  computerScore++;
  res = `You lose! ${computerChoice} beats ${playerChoice}`;
}

playerDisplay.textContent = `YOU: ${playerScore}`;
computerDisplay.textContent = `COMPUTER: ${computerScore}`;
results.textContent = res;
if(playerScore == 5 || computerScore == 5){
 const winner = playerScore == 5? "You won the game!" : "Computer won the game!";
 results.textContent += `${winner}`; 
 disable();
}
}

function disable(){
 rockbn.disabled = true;
 paperbn.disabled = true;
 scissorbn.disabled = true;   
}

rockbn.addEventListener('click', () => playRound('rock'));
paperbn.addEventListener('click', () => playRound('paper'));
scissorbn.addEventListener('click', () => playRound('scissors'));