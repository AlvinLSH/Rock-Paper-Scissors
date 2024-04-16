function getComputerChoice() {
    let comp_move = ['Rock', 'Paper', 'Scissors']
    return comp_move[Math.floor(Math.random() * 3)];
}

let counter = 1;
const para = document.querySelector('.result');
const btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        let result = playRound(e.target.className, getComputerChoice());
        counter++;
        displayResult(result);
    });
});


function playRound(playerChoice, compChoice) {
    playerChoice = playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1);
    console.log(`player: ${playerChoice}, comp: ${compChoice}`);
    
    if ((playerChoice === 'Rock' && compChoice === 'Rock') || 
        (playerChoice === 'Paper' && compChoice === 'Paper') ||
        (playerChoice === 'Scissors' && compChoice === 'Scissors')) {
            para.textContent = `Round ${counter}: Both of you tied`;
            return 'tied';
    } 
    else if ((playerChoice === 'Rock' && compChoice === 'Scissors') ||
                (playerChoice === 'Paper' && compChoice === 'Rock') ||
                (playerChoice === 'Scissors' && compChoice === 'Rock')) {
                    para.textContent = `Round ${counter}: Player wins this round`;
                    return 'win'
    } 
    else {
        para.textContent = `Round ${counter}: Computer wins this round`;
        return 'lost';
    }
}

const div = document.querySelector('div');
const playerScore = document.createElement('p');
const compScore = document.createElement('p');
playerScore.textContent = 'Player Score: 0';
compScore.textContent = 'Computer Score: 0';
div.appendChild(playerScore);
div.appendChild(compScore);

function displayResult(result) {
    let pscore = parseInt(playerScore.textContent.slice(-1));
    let cscore = parseInt(compScore.textContent.slice(-1));
    switch (result) {
        case 'win':
            pscore++;
            playerScore.textContent = `${playerScore.textContent.slice(0,-1)} ${pscore}`;
            break;
        case 'lost':
            cscore++;
            compScore.textContent = `${compScore.textContent.slice(0,-1)} ${cscore}`;
            break;
    }
    if (pscore === 5 || cscore === 5) announceWinner(pscore, cscore); 
}

function announceWinner(pScore, cScore) {
    if (pScore > cScore) {
        alert('Player Wins!');
    } else alert ('Computer Wins!');

    playerScore.textContent = 'Player Score: 0';
    compScore.textContent = 'Computer Score: 0';
    para.textContent = '';
    counter = 1;


}



