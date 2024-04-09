// This is a function, getComputerChoice() to get the move used by the computer.
function getComputerChoice() {

// Declare variable rock, paper and scissors. Assign them from 1 to 3 respectively.
    let rock = 1,
        paper = 2,
        scissors = 3;
// Declare variable choice to store a random number between 1 to 3
    let choice = Math.floor(Math.random() * 3) + 1;
// if else statement to return respective move.
    if (choice === rock) {
        return 'Rock';
    } else if (choice === paper) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Create a function, playRound() with two parameters playerSelection and computerSelection.
function playRound(playerSelection, computerSelection) {
        
    // Change the first character to upperCase.
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1);
    
    // if else statement which return win, tie or lose messages based on selected moves. 
    
    // Player Selection is Rock
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            console.log('Both of you tied!');
        } else if (computerSelection === 'Paper') {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return 'lose';
        } else {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return 'win';
        }
        // Player Selection is Paper
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Paper') {
            console.log('Both of you tied!');
        } else if (computerSelection === 'Scissors') {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return 'lose';
        } else {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return 'win';
        }
        // Player Selection is Scissors
    } else {
        if (computerSelection === 'Scissors') {
            console.log('Both of you tied!');
        } else if (computerSelection === 'Rock') {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return 'lose';
        } else {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return 'win';
        }
    }
}



// Create a function, playGame()
function playGame() {

// Declare variable counter, result and initialize them to 0
    let counter = 0,
        result,
        win_count = 0,
        lose_count = 0;
    
// 
// Crete a variable called playerSelection to prompt player's move.
// The string entered is case insensitive.
    let playerSelection = null;

// Declare variable computerSelection to store returned value from getComputerChoice()
    let computerSelection = null;
// Execute playRound for five times
    while (counter < 5) {
        // Prompt player to choose a move for each new round
        playerSelection = prompt('Choose your move: ', '').toLowerCase();
        // Invoke getComputerChoice for each new round
        computerSelection = getComputerChoice();

        // Execute playRound()
        // Return result of that round 
        result = playRound(playerSelection, computerSelection);

        // Increment win count or lose count based on result
        if (result === 'win') {
            win_count++;
        } else if (result === 'lose') {
            lose_count++;
        }

        // Increment counter
        counter++;
    }
//Return match result
    if (win_count > lose_count) {
        return 'You win! Congratulations';
    } else if (win_count < lose_count) {
        return 'You lost. Try again next time';
    } else {
        return 'It\'s a tie. No sweat';
    }
}
