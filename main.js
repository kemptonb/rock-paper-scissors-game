




//function playRound(playerSelection, computerSelection) {}
//button on click starts function and ask for prompt 
//"rock, paper, scissors?"
//store prompt input as a string "user const" variable 
//converted to uppercase  


//Generate a random number 1 to 3 stored in let variable


function randomNumGenerator(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const randomNum = randomNumGenerator(1, 4);

console.log (randomNum)

//convert 1 to "ROCK", 2 to "PAPER", 3 to "SCISSORS"
//make variable = to let variable uppercase string value

function computerPlay(){

let computerAnswer = "";

if (randomNum == 1) {
    computerAnswer = "ROCK";
} else if (randomNum == 2){
    computerAnswer = "PAPER";
} else {
    computerAnswer = "SCISSORS";
}

console.log (computerAnswer);
}

computerPlay();


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


function playerInput () {
    let playerPrompt = prompt("ROCK, PAPER, SCISSORS?");

    


    console.log(playerPrompt);
}

playerInput();












