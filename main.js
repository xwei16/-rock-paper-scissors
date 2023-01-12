const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function game() {
  //play 5 rounds
  //console based
  for (let i=0; i<5 ;i++) {
    let playerChoice = prompt("Please type in your choice here:", "");
    console.log(playRound(playerChoice.toLowerCase(), computerChoice().toLowerCase()));
  }
  if (playerScore > computerScore) return "You beat the computer! You are a genius!";
  else if (playerScore < computerScore) return "You got beat by the computer! Try again!";
  else return "You tied! Almost there!";
}

function playRound(playerSelection, computerSelection) {
  //one round
  if (playerSelection== "rock" && computerSelection == "rock") {
    return "You tied! You both picked rock";
  } else if (playerSelection== "paper" && computerSelection == "paper") {
    return "You tied! You both picked paper";
  } else if (playerSelection== "scissors" && computerSelection == "scissors") {
    return "You tied! You both picked scissors";
  } else if (playerSelection== "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You lost! Rock crushes scissors";
  } else if (playerSelection== "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You won! Scissors cuts paper";
  } else if (playerSelection== "rock" && computerSelection == "paper") {
    computerScore++;
    return "You lost! Paper covers rock";
  } else if (playerSelection== "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You won! Rock crushes scissors";
  } else if (playerSelection== "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You lost! Scissors cuts paper";
  } else if (playerSelection== "paper" && computerSelection == "rock") {
    playerScore++;
    return "You won! Paper covers rock";
  } 
}

function playerChoice() {
  //get input
}

function computerChoice() {
  //get random input from computer
  let random_idx = Math.floor(Math.random()*choices.length);
  return choices[random_idx];
}


console.log(game());

function refreshPage(){
  window.location.reload();
} 