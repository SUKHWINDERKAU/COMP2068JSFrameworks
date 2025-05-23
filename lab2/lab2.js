
const prompt = require('prompt');

// Start the prompt
prompt.start();

// Ask user for input
prompt.get(['userSelection'], function (err, result) {
    if (err) {
        console.error("Error receiving input:", err);
        return;
    }

    // Normalize user input
    const userSelection = result.userSelection.toUpperCase();

    // Generate computer choice
    const randomValue = Math.random();
    let computerSelection = '';

    if (randomValue < 0.34) {
        computerSelection = 'PAPER';
    } else if (randomValue <= 0.67) {
        computerSelection = 'SCISSORS';
    } else {
        computerSelection = 'ROCK';
    }

    console.log(`User selected: ${userSelection}`);
    console.log(`Computer selected: ${computerSelection}`);

    // Determine winner
    if (userSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        console.log("User Wins!");
    } else if (
        (userSelection === 'ROCK' || userSelection === 'SCISSORS' || userSelection === 'PAPER')
    ) {
        console.log("Computer Wins!");
    } else {
        console.log("Invalid input. Please enter ROCK, PAPER, or SCISSORS.");
    }
});




