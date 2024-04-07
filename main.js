// output to enter player's choice
let userInput = prompt("Let's play rock, paper, scissor; ------ enter your choice:", "");


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