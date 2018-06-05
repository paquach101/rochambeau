var playerChoice;
var computerChoice;
var choices = {
    Rock: 0,
    Paper: 1,
    Scissors: 2
}
var score = {
    wins: 0,
    losses: 0,
    ties: 0,
};

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + choice);
    storeComputerChoice();
}

function storeComputerChoice() {
    computerChoice = Math.floor(Math.random()*3);
    console.log("Computer choice = " + computerChoice);
}

function playGame(){
    if (playerChoice == computerChoice) {
        ++score.ties;
        displayGameResult("tie")
    } else if (playerChoice == choices.Rock && computerChoice == choices.Scissors) {
        ++score.wins;
        displayGameResult("win")
    } else if (playerChoice == choices.Paper && computerChoice == choices.Rock) {
        ++score.wins;
        displayGameResult("win")
    } else if (playerChoice == choices.Scissors && computerChoice == choices.Paper) {
        ++score.wins;
        displayGameResult("win")
    } else {
        ++score.losses;
        displayGameResult("lose")
    }
}
function displayGameResult(result){
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    if (result === "win") {
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }
    updateScoreBoard();
}

function updateScore(val){
    ++score[val];
    console.log("The score is now " + score);
}


function updateScoreBoard(winsId, lossesId, tiesId){
    document.getElementById(winsId).textContent = score.wins;
    document.getElementById(lossesId).textContent = score.losses;
    document.getElementById(tiesId).textContent = score.ties;
}

var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var playButton = document.getElementById("play");

rockButton.addEventListener('click', () => {storePlayerChoice(0)});
paperButton.addEventListener('click', () => {storePlayerChoice(1)});
scissorsButton.addEventListener('click', () => {storePlayerChoice(2)});
playButton.addEventListener('click', () => {playGame()});
