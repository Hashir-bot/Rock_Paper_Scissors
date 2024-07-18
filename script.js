function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Decide: R for Rock, P for paper, S for scissors: ");
    switch (humanChoice) {
        case "R":
            return "Rock";
        case "P":
            return "Paper";
        case "S":
            return "Scissors";
        default:
            return undefined;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        humanScore += 1;
        computerScore += 1;
        console.log("Draw");
    }
    else if ((humanChoice === "Rock" && computerChoice === "Scissors") || 
            (humanChoice === "Paper" && computerChoice === "Rock") || 
            (humanChoice === "Scissors" && computerChoice === "Paper")) {
        humanScore += 2;
        console.log(`Computer chose ${computerChoice}. You win!`);
    }
    else {
        computerScore += 2;
        console.log(`Computer chose ${computerChoice}. You lose!`);
    }
    console.log(`Your score ${humanScore}.`);
    console.log(`Computer score ${computerScore}.`);
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);