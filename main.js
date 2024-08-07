let humanScore = 0;
let computerScore = 0;


let getComputerChoice = () => {
    let arr = ['rock', 'paper', 'scissors']
    let randomChoice = Math.floor(Math.random() * arr.length)
    let randomComputerChoice = arr[randomChoice]
  console.log(randomComputerChoice)
   return (randomComputerChoice)
}


 
const getHumanChoice = () => {

    return (prompt("Please make a choice", "Rock Paper Or Scissors"))
}




const playRound = (humanChoice, computerChoice) => {
    
    if(humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        console.log("You lose!, Paper covers Rock")
        computerScore++
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        console.log("You lose!, Scissors cuts Paper")
        computerScore++
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        console.log("You lose!, Rock hits Scissors")
        computerScore++
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        console.log("You win!, Paper covers Rock")
        humanScore++
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        console.log("You win!, Scissors cuts Paper")
        humanScore++
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        console.log("You win!, Rock hits Scissors")
        humanScore++
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "scissors") {
        console.log("Draw!, You both chose scissors")
        humanScore++
        computerScore++
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "rock") {
        console.log("Draw!, You both chose rock")
        humanScore++
        computerScore++
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "paper") {
        console.log("Draw!, You both chose paper")
        humanScore++
        computerScore++
    } else {
        console.log("Please choose rock paper or scissors")
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);

const playGame = () => {
    if (humanScore > computerScore) {
        console.log("Congratulations you beat the Computer")
    } else if (humanScore < computerScore) {
        console.log("Computer Wins, Play another round")
    } else {
        console.log("Draw you match the computer")
    }
}

playGame()