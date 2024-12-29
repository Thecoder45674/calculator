// Plays a series of rounds in the Rock-Paper-Scissors game.
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    let result = playRound(humanSelection, computerSelection);
    humanScore += (result === 1) ? 1 : 0;
    computerScore += (result === 2) ? 1 : 0;

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    result = playRound(humanSelection, computerSelection);
    humanScore += (result === 1) ? 1 : 0;
    computerScore += (result === 2) ? 1 : 0;

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    result = playRound(humanSelection, computerSelection);
    humanScore += (result === 1) ? 1 : 0;
    computerScore += (result === 2) ? 1 : 0;

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    result = playRound(humanSelection, computerSelection);
    humanScore += (result === 1) ? 1 : 0;
    computerScore += (result === 2) ? 1 : 0;

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    results = playRound(humanSelection, computerSelection);
    humanScore += (result === 1) ? 1 : 0;
    computerScore += (result === 2) ? 1 : 0;

    alert(`Finals scores are:\nYou: ${humanScore}\nComputer: ${computerScore}`);
}

// Generates a random integer from 0 to max - 1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Gets the computer's choice: Rock, Paper, or Scissors
function getComputerChoice() {
    const computerSelection = getRandomInt(3);

    if (computerSelection === 0) return "Rock";     // 0 -> Rock
    if (computerSelection === 1) return "Paper";    // 1 -> Paper
    return "Scissors";                              // 2 -> Scissors
}

// Prompts the user to choose Rock, Paper, or Scissors
function getHumanChoice() {
    let humanSelection = prompt("Choice an option: Rock, Paper, Scissors");
    return humanSelection;
}

// Plays a single round of Rock-Paper-Scissors
function playRound(humanSelection, computerSelection) {
    humanSelection = humanSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (humanSelection == computerSelection) {
        alert("It is a tie");
        return 0;
    } else if (humanSelection === "rock" && computerSelection === "scissors" ||
            humanSelection === "paper" && computerSelection === "rock" || 
            humanSelection === "scissors" && computerSelection === "paper" ) {
        alert("You win this round");
        return 1;
    } else {
        alert("You lose this round");
        return 2;
    }
}

// Start the game
playGame();