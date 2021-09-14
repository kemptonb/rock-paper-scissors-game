
//Rock Paper Scissors Game in JavaScript

//Generate a random number 1 to 3 stored in let variable ROCK. PAPER, or SCISSORS

function randomNumGenerator(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


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

    } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
         alert ("PAPER vs PAPER. Try again.");
         console.log ("Try again");
    } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
        alert ("SCISSORS vs SCISSORS. Try again.");
        console.log ("Try again");
    } 
    //You win
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        alert ("You win!");
        console.log ("You win!");
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        alert ("You win!");
        console.log ("You win!");
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        alert ("You win!");
        console.log ("You win!");
    } 

    //You lose

    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        alert ("You lose");
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        alert ("You lose");
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        alert ("You lose");
    } else {
        alert ("Error")
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
    console.log("------NEW GAME------");
    console.log ("Random number: " + randomNum);

    const computerFinalAnswer = computerPlay(randomNum);

   

    playerPrompt = prompt("ROCK, PAPER, SCISSORS?");

    if (playerPrompt != null) {

    playerInputUpper = playerPrompt.toUpperCase();

    console.log("Player's selection: " + playerInputUpper);


    if (playerInputUpper == "ROCK"){
        console.log("ROCK true")
        return playRound (computerFinalAnswer, playerInputUpper); 
    }
    else if (playerInputUpper == "PAPER") {
        console.log("PAPER true")
        return playRound (computerFinalAnswer, playerInputUpper);  
    } else if (playerInputUpper == "SCISSORS") {
        console.log("SCISSORS true")
        return playRound (computerFinalAnswer, playerInputUpper); 
    }else {
        alert("Invalid answer. Try again.");
    }    


} // end if .length conditional to excecute code

} //end playerInput ()
