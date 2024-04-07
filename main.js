// output to enter player's choice
let playerInput = prompt("Let's play rock, paper, scissor; ------ enter your choice:", "");
// enabling case insensitive of the input
let userInput = playerInput.toLocaleLowerCase();
console.log(userInput);

// create a var that stores random output from 0 - 0.99
let randomOutput = Math.random();

// create computer choice function
function getComputerChoice(){

    // create an else if statement for value assignment of randomOutput with rock, paper , scissor
    if(randomOutput < 0.34){
        return 'rock';
    }else if(randomOutput <= 0.67){
        return 'paper';
    }else{
        return 'scissor';
    }
}
console.log(getComputerChoice());

// create a function that compares the user input and computer choice
function compare(playerSelection, computerSelection){

    // assigning the userInput value and random pick by computer to the parameters
    playerSelection = userInput;
    computerSelection = getComputerChoice();

    // create else if for comparison and output of win or loss
    if(playerSelection == computerSelection){
        return `You'r choice -- ${playerSelection} --and-- Computer choice -- ${computerSelection} ------- TIE`;
    }else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return `You'r choice -- ${playerSelection} --and-- Computer choice -- ${computerSelection} ------- YOU LOST`;
    }else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return `You'r choice -- ${playerSelection} --and-- Computer choice -- ${computerSelection} ------- YOU WON`;
    }else if(playerSelection == 'rock' && computerSelection == 'scissor'){
        return `You'r choice -- ${playerSelection} --and-- Computer choice -- ${computerSelection} ------- YOU WON`;
    }else if(playerSelection == 'scissor' && computerSelection == 'rock'){
        return `You'r choice -- ${playerSelection} --and-- Computer choice -- ${computerSelection} ------- YOU LOST`;
    }else if(playerSelection == 'scissor' && computerSelection == 'paper'){
        return `You'r choice -- ${playerSelection} --and-- Computer choice -- ${computerSelection} ------- YOU WON`;
    }else if(playerSelection == 'paper' && computerSelection == 'scissor'){
        return `You'r choice -- ${playerSelection} --and-- Computer choice -- ${computerSelection} ------- YOU LOST`;
    }

}
console.log(compare());

