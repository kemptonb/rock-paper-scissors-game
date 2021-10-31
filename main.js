//DEFAULT GLOBAL VARS
let playerScore = 0;
let computerScore = 0;
let computerResponse = "";
let playerResponse = "";

//COMPUTER RANDOM SELECTION
function computerCalc() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    let computerResponse = "";
    let randomNum = getRandomInt(1, 4);

    switch (randomNum) {
        case 1:
            computerResponse = "ROCK";
            return computerResponse;
        case 2:
            computerResponse = "PAPER";
            return computerResponse;
        case 3:
            computerResponse = "SCISSORS";
            return computerResponse;
    }//end switch computerResponse
}//end computerCalc()

//PLAYER SELECTION
function rockChoice() {
    autoRestart()
    playerResponse = "ROCK";
    initialSelection();
}

function paperChoice() {
    autoRestart()
    playerResponse = "PAPER";
    initialSelection();
}

function scissorsChoice() {
    autoRestart()
    playerResponse = "SCISSORS";
    initialSelection();
}

function initialSelection() {
    document.getElementById("endGame").innerHTML = "";
    computerResponse = computerCalc();
    compareInput(playerResponse, computerResponse);
    refreshData();
}

//COMPARE VARS AND SCORE GAME
function compareInput(playerResponse, computerResponse) {
    switch (true) {
        case (playerResponse === computerResponse):
            break;
        case (playerResponse === "ROCK" && computerResponse === "PAPER"):
            computerScore++;
            break;
        case (playerResponse === "PAPER" && computerResponse === "SCISSORS"):
            computerScore++;
            break;
        case (playerResponse === "SCISSORS" && computerResponse === "ROCK"):
            computerScore++;
            break;
        case (playerResponse === "ROCK" && computerResponse === "SCISSORS"):
            playerScore++;
            break;
        case (playerResponse === "PAPER" && computerResponse === "ROCK"):
            playerScore++;
            break;
        case (playerResponse === "SCISSORS" && computerResponse === "PAPER"):
            playerScore++;
            break;
    }
    scoreGame();

    function scoreGame() {
        if (computerScore === 5 || playerScore === 5) {
            switch (true) {
                case (playerScore === computerScore):
                    document.getElementById("endGame").innerHTML = "TIE";
                    break;
                case (playerScore > computerScore):
                    document.getElementById("endGame").innerHTML = "YOU WIN";
                    break;
                case (playerScore < computerScore):
                    document.getElementById("endGame").innerHTML = "YOU LOSE";
                    break;
            }
        }
    }
}

//UPDATE ANSWERS
function refreshData() {
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerAnswer").innerHTML = computerResponse;
    document.getElementById("playerAnswer").innerHTML = playerResponse;
}

//AUTO RESET GAME IF COMP/PLAYER SCORE GREATER THAN 5
function autoRestart() {
    if (playerScore >= 5 || computerScore >= 5) {
        newGame();
    }
}

//RESTART GAME
function newGame() {
    playerScore = 0;
    computerScore = 0;
    playerResponse = ". . .";
    computerResponse = ". . ."
    document.getElementById("endGame").innerHTML = "NEW GAME";
    refreshData();
}