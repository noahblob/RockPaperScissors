function getComputerChoice() {
    choice =  Math.floor(Math.random()*3+1);
    if (choice === 1) {
        return "rock"
    } else if (choice === 2) {
        return "paper"
    }
    return "scissors"
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock";
    } else if (playerSelection === "scissors" && computerSelection == "paper") {
        return "You win, scissors beats paper";
    } else if (playerSelection === "paper" && computerSelection == "scissors") {
        return "You lose, scissors beats paper";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors";
    } else {
        return "You lose, rock beats scissors";
    }
}

function game() {

    let playerWinCount = 0;
    let computerWinCount = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Please input rock, paper or scissors: ")
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        if (playRound(playerChoice,computerChoice).includes("You lose")) {
            computerWinCount++;
        } else if (playRound(playerChoice, computerChoice).includes("You win")) {
            playerWinCount++;
        } else {
            computerWinCount++;
            playerWinCount++;
        }
    }

    if (playerWinCount > computerWinCount) {
        console.log("You win");
    } else {
        console.log("Computer wins");
    }
}

game();