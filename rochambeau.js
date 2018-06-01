
var playerChoice;
var computerChoice;
var choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];
var score = [0,0,0];

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + choice);
    storeComputerChoice();
}

function storeComputerChoice() {
    computerChoice = Math.floor(Math.random()*5);
    console.log("Computer choice = " + computerChoice);
}

function playGame(){
    if (playerChoice == computerChoice) {
        updateScore(1);
        displayGameResult("tie")
    } else if (playerChoice == 0 && computerChoice == 2 || playerChoice == 0 && computerChoice == 4) {
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 1 && computerChoice == 0 || playerChoice == 1 && computerChoice == 3) {
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 2 && computerChoice == 1 || playerChoice == 2 && computerChoice == 4) {
        updateScore(0);
        displayGameResult("win")
    } else {
        updateScore(2);
        displayGameResult("lose")
    }
}

function displayGameResult(result){
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    if (result === "win") {
        // Display that it was a win
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

function updateScoreBoard(){
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1];
}

var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var spockButton = document.getElementById("spock");
var lizardButton = document.getElementById("lizard")
var playButton = document.getElementById("play");

rockButton.addEventListener('click', () => {storePlayerChoice(0)});
paperButton.addEventListener('click', () => {storePlayerChoice(1)});
scissorsButton.addEventListener('click', () => {storePlayerChoice(2)});
spockButton.addEventListener('click', () => {storePlayerChoice(3)});
lizardButton.addEventListener('click', () => {storePlayerChoice(4)});
playButton.addEventListener('click', () => {playGame()});
