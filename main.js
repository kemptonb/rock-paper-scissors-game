
//Rock Paper Scissors Game in JavaScript
//start Game HTML button ->
function game(){

    let computerScore = 0;
    let playerScore = 0;


//for loop to run 5 rounds
for (let i = 1; i <= 5; i++) {
roundNum = i;
console.log("-------------Round " + roundNum + "----------------");



//If loop input === null, break loop console.log() "i" var
playerInput();

if (playerPrompt === null){
    console.log("i: " + i);
    break;
}



//Generate a random number 1 to 3 stored in let variable ROCK. PAPER, or SCISSORS

function randomNumGenerator(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


// assign random number to computer answer
function computerPlay(randomNum){

let computerAnswer = "";

if (randomNum == 1) {
    computerAnswer = "ROCK";
} else if (randomNum == 2){
    computerAnswer = "PAPER";
} else if (randomNum == 3) {
    computerAnswer = "SCISSORS";
} else {
    console.log("randomNum error");
}

console.log ("Computer's selection: " + computerAnswer);
return computerAnswer;
}

//store score vars with function for computer, player, or tie

function computerWin() {
    computerScore = computerScore + 1;
    console.log("Computer score: " + computerScore);
    console.log("Player score: " + playerScore);
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    console.log ("i:" + i);
    return compareScores();
}

function playerWin(){
    playerScore = playerScore + 1;
    console.log("Computer score: " + computerScore);
    console.log("Player score: " + playerScore);
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    console.log ("i:" + i);
    return compareScores();
}

function tie () {
    console.log("Computer score: " + computerScore);
    console.log("Player score: " + playerScore);
    return compareScores();
}

//After 5 rounds, counting with "i" from loop, declare winner or tie
function compareScores(){
if (i === 5)

    if (computerScore > playerScore){
        alert("Computer wins");
        console.log("Computer wins");
    } else if (playerScore > computerScore){
        alert("Player wins");
        console.log("Player wins");
    } else if (playerScore == computerScore){
        alert("Tie gane");
        console.log("Tie game");
    } else {
        console.log("Error");
    }
}

//Compare user prompt const variable to computer const variable 
// if rock && rock  -> try again
//                  -> paper -> lose
//                  -> scissors -> win 


// if paper && paper-> try again
//                  -> scissors -> lose
//                  -> rock -> win 


// if scissors && scissors -> try again
//                         -> rock -> lose
//                         -> paper -> win 


function playRound(computerSelection, playerSelection) {

    
    //Ty again
    if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        alert ("ROCK vs ROCK. Try again.");
        console.log ("Try again");
        return tie();
    } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
         alert ("PAPER vs PAPER. Try again.");
         console.log ("Try again");
         return tie();
    } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
        alert ("SCISSORS vs SCISSORS. Try again.");
        console.log ("Try again");
        return tie();
    } 
    //You win
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        alert ("You won the round");
        console.log ("You won the round");
        return playerWin();
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        alert ("You won the round");
        console.log ("You won the round");
        return playerWin();
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        alert ("You win!");
        console.log ("You won the round");
        return playerWin();
    } 

    //You lose

    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        console.log("You lost the round");
        alert("You lost the round");
        return computerWin();
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        console.log("You lost the round");
        alert("You lost the round");
        return computerWin();
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("You lost the round");
        alert("You lost the round");
        return computerWin();
    } else {
        alert ("Error");
    }

} //end playRound



//Generate random number assigned to ROCK, PAPER, or SCISSORS
//Button onClick() starts function and ask for prompt 
//"rock, paper, scissors?"
//store prompt input as a string variable 
//converted to uppercase 
//Also, button onClick() runs 3 previous functons and completes game 



function playerInput() {

    const randomNum = randomNumGenerator(1, 4);
   
    console.log ("Random number: " + randomNum);

    const computerFinalAnswer = computerPlay(randomNum);

   

    playerPrompt = prompt("ROCK, PAPER, SCISSORS?");
    
    if (playerPrompt === null) {
        console.log ("Input: " + playerPrompt + ". Break loop.");
        return playerPrompt;
    }
    
    if (playerPrompt != null) {

    playerInputUpper = playerPrompt.toUpperCase();

    console.log("Player's selection: " + playerInputUpper);
    


    if (playerInputUpper == "ROCK"){
       
        return playRound (computerFinalAnswer, playerInputUpper); 
    }
    else if (playerInputUpper == "PAPER") {
       
        return playRound (computerFinalAnswer, playerInputUpper);  
    } else if (playerInputUpper == "SCISSORS") {
       
        return playRound (computerFinalAnswer, playerInputUpper); 
    }else {
        alert("Invalid answer. Try again.");
        console.log("Invalid answer. Try again.");
        console.log ("i:" + i);

    } 
} // end if .length conditional to excecute code 



} //end playerInput ()


}// end game for loop
}//End game()
