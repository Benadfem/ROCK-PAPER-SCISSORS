// This program is a game of rock scissors paper

function computerChoice(){
    let choices = ["rock", "scissors", "paper"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function humanChoice(){
    let choice = prompt("Enter your choice (rock, scissors, paper):");
    choice = choice.toLowerCase();
    return choice;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }   
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "scissors" && computerChoice === "paper") ||
             (humanChoice === "paper" && computerChoice === "rock")) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}