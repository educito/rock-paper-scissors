/// generar jugada aleatoria del computador
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    console.log(random)
    let computerChoice =""
    if (random == 0) {
        computerChoice ="rock"
    }
    if (random == 1) {
        computerChoice ="paper"
    }
    if (random == 2) {
        computerChoice ="scissors"
    }

    console.log(computerChoice)
    return computerChoice
}


function playerSelection(){
    let text = prompt("Ingresa tu jugada rock/paper/scissors");
    let result = text.toLowerCase();
    console.log(result);
    return result;
}

function singleRound(){
    let computer = getComputerChoice();
    let human = playerSelection();
    let result = ""
    if (
        (computer == "rock" && human == "scissors") ||
        (computer == "paper" && human == "rock") ||
        (computer == "scissors" && human =="paper")
    ){
        alert("You lose, " + computer + " beats " + human)
        let result = "computerWins"
        return result
    }
    if (
        (human == "rock" && computer == "scissors") ||
        (human == "paper" && computer == "rock") ||
        (human == "scissors" && computer =="paper")
    ){
        alert("You win, " + human + " beats " + computer)
        let result = "humanWins"
        return result
    }
    if (
        (human == "rock" && computer == "rock") ||
        (human == "paper" && computer == "paper") ||
        (human == "scissors" && computer =="scissors")
    ){
        alert("Draw, " + human + " equals " + computer)
    }

}




function game(){
    let scoreHuman = 0;
    let scoreComputer = 0;
    
    for (let i = 0; i < 5; i++) {
        let gameResult = singleRound();
        console.log(gameResult)
        if(gameResult == "humanWins"){ scoreHuman++}
        if(gameResult == "computerWins"){scoreComputer++}

      }

    if(scoreComputer > scoreHuman){alert("Computer wins round: " + scoreComputer + " to " + scoreHuman)}

    if(scoreHuman > scoreComputer){alert("You won round: " + scoreHuman + " to " + scoreComputer)}

    if(scoreComputer == scoreHuman) {alert("Its a draw: " + scoreComputer + " to " + scoreHuman)}

}


game()

