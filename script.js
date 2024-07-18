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

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();