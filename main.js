//global vars
let roundNum = 0;
let playerScore = 0;
let computerScore = 0;
let computerResponse = "";
let playerResponse = "";

function game() {
    refreshData();
    document.getElementById("round").innerHTML = roundNum;
    round();

function round() {
    roundNum++;
    console.log("******Round number: " + roundNum + " ********");

    //computerResponse switch
    let computerResponse = "";
    let randomNum = getRandomInt(1, 4);

    switch (randomNum) {
        case 1:
            computerResponse = "ROCK";
            console.log(computerResponse);
            break;
        case 2:
            computerResponse = "PAPER";
            console.log(computerResponse);
            break;
        case 3:
            computerResponse = "SCISSORS";
            console.log(computerResponse);
            break;
    }//end switch computerResponse

    //player response
    let playerResponse = prompt("Rock, paper, scissors?");
    if (playerResponse != null && playerResponse != "") {
        playerResponse = playerResponse.toUpperCase();
        document.getElementById("computerAnswer").innerHTML = computerResponse;
        document.getElementById("playerAnswer").innerHTML = playerResponse;
        switch (playerResponse) {
            case "ROCK":
                compareInput(playerResponse, computerResponse);
                break;
            case "PAPER":
                compareInput(playerResponse, computerResponse);
                break;
            case "SCISSORS":
                compareInput(playerResponse, computerResponse);
                break;
            default:
                alert("Invalid answer. Try again");
                endGame();
                break;
        }//end playerResponse switch 
    } else {
        alert("Invalid answer. Try again.");
        endGame();
    }//end if playerResponse   


function compareInput(playerResponse, computerResponse) {
    switch (true) {
        case (playerResponse === computerResponse):
            alert("Tie. Try again.");
            endGame();
            break;
        case (playerResponse === "ROCK" && computerResponse === "PAPER"):
            alert("You lose round");
            computerScore++;
            endGame();
            break;
        case (playerResponse === "PAPER" && computerResponse === "SCISSORS"):
            alert("You lose round");
            computerScore++;
            endGame();
            break;
        case (playerResponse === "SCISSORS" && computerResponse === "ROCK"):
            alert("You lose round");
            computerScore++;
            endGame();
            break;
        case (playerResponse === "ROCK" && computerResponse === "SCISSORS"):
            alert("You win round");
            playerScore++;
            endGame();
            break;
        case (playerResponse === "PAPER" && computerResponse === "ROCK"):
            alert("You win round");
            playerScore++;
            endGame();
            break;
        case (playerResponse === "SCISSORS" && computerResponse === "PAPER"):
            alert("You win round");
            playerScore++;
            endGame();
            break;
        default:
            alert("Error");
            break;
    }
}
    function scoreGame() {
        switch (true) {
            case (playerScore === computerScore):
                alert("Tie game.");
                break;
            case (playerScore > computerScore):
                alert("You won game.");
                break;
            case (playerScore < computerScore):
                alert("You lost game.");
                break;
        }
        roundNum = 0;
        playerScore = 0;
        computerScore = 0;
    }
    
    function endGame() {
        if (roundNum === 5) {
           
            alert("Game ended");
            scoreGame();
        }
    }
    refreshData();


//random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


}//end round()

function refreshData() {
    document.getElementById("round").innerHTML = roundNum;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerScore").innerHTML = playerScore;
}

}//end game()



function newGame() {
    roundNum = "";
    playerScore = "";
    computerScore = "";
    playerResponse = "";
    computerResponse = ""
    document.getElementById("round").innerHTML = roundNum;
    document.getElementById("computerAnswer").innerHTML = computerResponse;
    document.getElementById("playerAnswer").innerHTML = playerResponse;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerScore").innerHTML = playerScore;
    console.clear();
    alert("Reset");
}