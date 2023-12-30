function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase(); 
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection !== computerSelection) {
        if (computerSelection === "paper" && playerSelection === "rock") {
            return "Oh, damn, you lose by a paper..."; 
        } else if (computerSelection === "paper" && playerSelection === "scissors") {
            return "Hooray! You win, scissors beat paper =)";
        } else if (computerSelection === "scissors" && playerSelection === "rock") {
            return "Hooray! You win, a rock beats scissors =)";
        } else if (computerSelection === "scissors" && playerSelection === "paper") {
            return "Oh, damn, you lose by scissors...";
        } else if (computerSelection === "rock" && playerSelection === "paper") {
            return "Hooray! You win, paper beats rock =)";
        } else if (computerSelection === "rock" && playerSelection === "scissors") {
            return "Oh, damn, you lose by a rock...";
        } else {
            return "please choose rock, paper or scissors only!";
        }
    }
}

function game() {
    for (let round = 0; round < 5; round++) {
       const playerSelection = prompt("Choose between rock, paper and scissors");
       const computerSelection = getComputerChoice();
       let gameplay = playRound(playerSelection, computerSelection);
       console.log(gameplay);
       if (gameplay === "It's a tie!" || gameplay === "please choose rock, paper or scissors only!") {
        round--;
       }
    }
}

console.log(game());