var Rochambeau = {
    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    playButton: document.getElementById("play"),
    spockButton: document.getElementById("spock"),
    lizardButton: document.getElementById("lizard"),

    choices: {
        Rock: 0,
        Paper: 1,
        Scissors: 2,
        Spock: 3,
        Lizard: 4
    }
    score: {
        wins: 0,
        losses: 0,
        ties: 0,
        won: 0,
        lost: 0
    }
    results: {
        WIN: 1,
        TIE: 0,
        Loss: -1
    },

    player: new Player(),
    computer: new Player()



    storePlayerChoice: function (choice) {
        this.player.choice = choice;
        console.log("My choice = " + this.player.choice);
        this.storeComputerChoice();
    },

    storeComputerChoice: function () {
        this.computer.choice = Math.floor(Math.random() * 3);
    }


    playgame: function () {
        if (Rochambeau.player.choice == Rochambeau.computer.choice) {
            ++score.ties;
            displayGameResult("tie")
        } else if (Rochambeau.player.choice == choices.Rock && Rochambeau.computer.choice == Rochambeau.choices.Scissors) {
            ++score.wins;
            displayGameResult("win")
        } else if (Rochambeau.player.choice == choices.Paper && Rochambeau.computer.choice == Rochambeau.choices.Rock) {
            ++score.wins;
            displayGameResult("win")
        } else if (Rochambeau.player.choice == choices.Scissors && Rochambeau.computer.choice == Rochambeau.choices.Paper) {
            ++score.wins;
            displayGameResult("win")
        } else {
            ++score.losses;
            displayGameResult("lose")
        }
    }
    updateScoreBoard: function (winsId, lossesId, tiesId, gameWins, gameLosses) {
        document.getElementById(winsId).textContent = score.wins;
        document.getElementById(lossesId).textContent = score.losses;
        document.getElementById(tiesId).textContent = score.ties;
        document.getElementById(gameWins).textContent = score.won;
        document.getElementById(gameLosses).textContent = score.lost;
    }

}

function Player() {
    this.choice = null;
}


function displayGameResult(result) {
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

function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}


function updateMatch(m) {
    ++match[m];
    console.log("The match is now " + match);
}



var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var playButton = document.getElementById("play");

rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
spockButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(4)
});
playButton.addEventListener('click', () => {
    playGame()
});
