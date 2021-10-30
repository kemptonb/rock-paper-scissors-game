let roundNum = 1;
document.getElementById("round").innerHTML = roundNum + " / 5";
let playerScore = 0;
let computerScore = 0;
let computerResponse = "";
let playerResponse = "";

function rockChoice() {
    newStart();
    document.getElementById("endGame").innerHTML = "";
    computerResponse = computerCalc();
    playerResponse = "ROCK";
    compareInput(playerResponse, computerResponse);
    refreshData();
}

function paperChoice() {
    newStart();
    document.getElementById("endGame").innerHTML = "";
    computerResponse = computerCalc();
    playerResponse = "PAPER";
    compareInput(playerResponse, computerResponse);
    refreshData();
}

function scissorsChoice() {
    newStart();
    document.getElementById("endGame").innerHTML = "";
    computerResponse = computerCalc();
    playerResponse = "SCISSORS";
    compareInput(playerResponse, computerResponse);
    refreshData();
}

function compareInput(playerResponse, computerResponse) {
    switch (true) {
        case (playerResponse === computerResponse):
            endGame();
            break;
        case (playerResponse === "ROCK" && computerResponse === "PAPER"):
            computerScore++;
            endGame();
            break;
        case (playerResponse === "PAPER" && computerResponse === "SCISSORS"):
            computerScore++;
            endGame();
            break;
        case (playerResponse === "SCISSORS" && computerResponse === "ROCK"):
            computerScore++;
            endGame();
            break;
        case (playerResponse === "ROCK" && computerResponse === "SCISSORS"):
            playerScore++;
            endGame();
            break;
        case (playerResponse === "PAPER" && computerResponse === "ROCK"):
            playerScore++;
            endGame();
            break;
        case (playerResponse === "SCISSORS" && computerResponse === "PAPER"):
            playerScore++;
            endGame();
            break;
    }
}

function computerCalc() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    roundNum++;
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

function newGame() {
    roundNum = 1;
    playerScore = 0;
    computerScore = 0;
    playerResponse = ". . .";
    computerResponse = ". . ."
    document.getElementById("endGame").innerHTML = "";
    refreshData();
}

function endGame() {
    if (roundNum === 6) {
        scoreGame();
    }
}

function scoreGame() {
    switch (true) {
        case (playerScore === computerScore):
            endTie();
            break;
        case (playerScore > computerScore):
            endWin();
            break;
        case (playerScore < computerScore):
            endLose();
            break;
    }

}

function refreshData() {
    document.getElementById("round").innerHTML = roundNum + " / 5";
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerAnswer").innerHTML = computerResponse;
    document.getElementById("playerAnswer").innerHTML = playerResponse;
}

function endWin() {
    document.getElementById("endGame").innerHTML = "You Win Round!";
    roundNum = 1;
}

function endLose() {
    document.getElementById("endGame").innerHTML = "You Lose Round";
    roundNum = 1;
}
function endTie() {
    document.getElementById("endGame").innerHTML = "Tie Game";
    roundNum = 1;
}

function newStart() {
    if (roundNum === 1) {
        newGame();
    }
}

