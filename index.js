let buttons = [];

for (let i = 0; i < 3; i++) {
    buttons[i] = document.createElement("button");
}

buttons[0].textContent = "rock";
buttons[1].textContent = "paper";
buttons[2].textContent = "scissors";

document.body.append(buttons[0], buttons[1], buttons[2]);


let divBlock = document.createElement("div");
document.body.append(divBlock);


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

let computerCount = 0;
let userCount = 0;
let round = 0;
    for (button of buttons) {
        button.addEventListener("click", playRound);

    }

function playRound() {

       let playerSelection = this.textContent;
    
    
    computerSelection = getComputerChoice();

    div = document.createElement("div");
    div.classList.add("new");

    round++

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        div.textContent = "It's a tie!";
        divBlock.appendChild(div);
        if (document.querySelectorAll(".new").length > 1) {
            divBlock.removeChild(divBlock.firstElementChild);
        }
        round--;
        // return "It's a tie!";
    } else if (playerSelection !== computerSelection) {
        if (computerSelection === "paper" && playerSelection === "rock") {
            console.log("Oh, damn, you lose by a paper..."); 
            div.textContent = "Oh, damn, you lose by a paper...";
            divBlock.appendChild(div);
            if (document.querySelectorAll(".new").length > 1) {
                divBlock.removeChild(divBlock.firstElementChild);
            }
            computerCount++;
            // return "Oh, damn, you lose by a paper...";
        } else if (computerSelection === "paper" && playerSelection === "scissors") {
            console.log("Hooray! You win, scissors beat paper =)");
            div.textContent = "Hooray! You win, scissors beat paper =)";
            divBlock.appendChild(div);
            if (document.querySelectorAll(".new").length > 1) {
                divBlock.removeChild(divBlock.firstElementChild);
            }
            userCount++;
            // return "Hooray! You win, scissors beat paper =)";
        } else if (computerSelection === "scissors" && playerSelection === "rock") {
            console.log("Hooray! You win, a rock beats scissors =)");
            div.textContent = "Hooray! You win, a rock beats scissors =)";
            divBlock.appendChild(div);
            if (document.querySelectorAll(".new").length > 1) {
                divBlock.removeChild(divBlock.firstElementChild);
            }
            userCount++;
            // return "Hooray! You win, a rock beats scissors =)";
        } else if (computerSelection === "scissors" && playerSelection === "paper") {
            console.log("Oh, damn, you lose by scissors...");
            div.textContent = "Oh, damn, you lose by scissors...";
            divBlock.appendChild(div);
            if (document.querySelectorAll(".new").length > 1) {
                divBlock.removeChild(divBlock.firstElementChild);
            }
            computerCount++;
            // return "Oh, damn, you lose by scissors...";
        } else if (computerSelection === "rock" && playerSelection === "paper") {
            console.log("Hooray! You win, paper beats rock =)");
            div.textContent = "Hooray! You win, paper beats rock =)";
            divBlock.appendChild(div);
            if (document.querySelectorAll(".new").length > 1) {
                divBlock.removeChild(divBlock.firstElementChild);
            }
            userCount++;
            // return "Hooray! You win, paper beats rock =)";
        } else if (computerSelection === "rock" && playerSelection === "scissors") {
            console.log("Oh, damn, you lose by a rock...");
            div.textContent = "Oh, damn, you lose by a rock...";
            divBlock.appendChild(div);
            if (document.querySelectorAll(".new").length > 1) {
                divBlock.removeChild(divBlock.firstElementChild);
            }
            computerCount++;
            // return "Oh, damn, you lose by a rock...";
        } else {
            console.log("please choose rock, paper or scissors only!");
            div.textContent = "please choose rock, paper or scissors only!";
            divBlock.appendChild(div);
            if (document.querySelectorAll(".new").length > 1) {
                divBlock.removeChild(divBlock.firstElementChild);
            }
            round--;
            // return "please choose rock, paper or scissors only!";
        }
    }

    // if (document.querySelectorAll(".new").length > 1) {
    //     divBlock.removeChild(divBlock.firstElementChild);
    // }

    if (round === 5) {
        round = "ENOUGH!";
        game();
        
    }



}

function game() {

    let computerCountUI = document.createElement("h3");
    let userCountUI = document.createElement("h3");
    let results = document.createElement("h2");

    computerCountUI.textContent = `Computer: ${computerCount}`;
    userCountUI.textContent = `User: ${userCount}`;

    document.body.append(computerCountUI, userCountUI);


        if (computerCount > userCount) {
            // return console.log("Computer has won!");
            results.textContent = "Computer has won!";

        } else if (computerCount < userCount) {
            // return console.log("User has won!");
            results.textContent = "User has won!";
        }

        document.body.append(results);

}

