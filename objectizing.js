var Rochambeau = {
    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    playButton: document.getElementById("play"),
    spockButton: document.getElementById("spock"),
    lizardButton: document.getElementById("lizard"),
    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    spockButton: document.getElementById("spock"),
    lizardButton: document.getElementById("lizard"),
    playButton: document.getElementById("play"),

    choices: {
        Rock: 0,
        Paper: 1,
        Scissors: 2,
        Spock: 3,
        Lizard: 4
    },
    score: {
        wins: 0,
        losses: 0,
        ties: 0
    },
    match: {
        won: 0,
        lost: 0
    },
    results: {
        WIN: 1,
        TIE: 0,
        Loss: -1
    },

    player: new Player(),
    computer: new Player(),



    storePlayerChoice: function (choice) {
        this.player.choice = choice;
        console.log("My choice = " + this.player.choice);
        this.storeComputerChoice();
    },

    storeComputerChoice: function () {
        this.computer.choice = Math.floor(Math.random() * 3);
    },


    playgame: function () {
        if (Rochambeau.player.choice == Rochambeau.computer.choice) {
            ++Rochambeau.score.ties;
            displayGameResult("tie")
        } else if (Rochambeau.player.choice == choices.Rock && Rochambeau.computer.choice == Rochambeau.choices.Scissors) {
            ++Rochambeau.score.wins;
            displayGameResult("win")
        } else if (Rochambeau.player.choice == choices.Paper && Rochambeau.computer.choice == Rochambeau.choices.Rock) {
            ++Rochambeau.score.wins;
            displayGameResult("win")
        } else if (Rochambeau.player.choice == choices.Scissors && Rochambeau.computer.choice == Rochambeau.choices.Paper) {
            ++Rochambeau.score.wins;
            displayGameResult("win")
        } else {
            ++Rochambeau.score.losses;
            displayGameResult("lose")
        }

        if (Rochambeau.score[0] == 2) {
            Rochambeau.updateMatch(0);
            Rochambeau.score[0, 0, 0];
        } else if (Rochambeau.score[2] == 2) {
            Rochambeau.updateMatch(1);
            Rochambeau.score[0, 0, 0];
        }
    },

    updateScoreBoard: function (winsId, lossesId, tiesId, gameWins, gameLosses) {
        document.getElementById(winsId).textContent = Rochambeau.score.wins;
        document.getElementById(lossesId).textContent = Rochambeau.score.losses;
        document.getElementById(tiesId).textContent = Rochambeau.score.ties;
        document.getElementById(gameWins).textContent = Rochambeau.score.won;
        document.getElementById(gameLosses).textContent = Rochambeau.score.lost;
    },

    displayGameResult: function (result) {
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
        Rochambeau.updateScoreBoard();
    }


    Rochambeau.rockButton.addEventListener('click', () => {
        Rochambeau.storePlayerChoice(0)
    }),

    Rochambeau.paperButton.addEventListener('click', () => {
        Rochambeau.storePlayerChoice(1)
    }),

    Rochambeau.scissorsButton.addEventListener('click', () => {
        Rochambeau.storePlayerChoice(2)
    }),

    Rochambeau.spockButton.addEventListener('click', () => {
        Rochambeau.storePlayerChoice(3)
    }),

    Rochambeau.lizardButton.addEventListener('click', () => {
        Rochambeau.storePlayerChoice(4)
    }),

    Rochambeau.playButton.addEventListener('click', () => {
        Rochambeau.playGame()
    }),

    updateScore: function (val) {
        ++Rochambeau.score[val];
        Rochambeau.console.log("The score is now " + score);
    },

    updateMatch: function (m) {
        ++Rochambeau.match[m];
        Rochambeau.console.log("The match is now " + match);
    },

},

function Player() {
    this.choice = null;
}
