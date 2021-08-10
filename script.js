var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["R", "P", "S", "L", "Sp"]

var Game = function() {
    var userChoice = window.prompt("Enter R, P, S, L, or Sp")

    if (!userChoice){
        return;
    }

    userChoice = userChoice.toUpperCase();

    var index = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[index]
    
    window.alert("The computer chose " + computerChoice);

    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "Sp" && computerChoice === "R") ||
        (userChoice === "L" && computerChoice === "Sp") ||
        (userChoice === "S" && computerChoice === "P") ||
        (userChoice === "S" && computerChoice === "L") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "Sp" && computerChoice === "S") ||
        (userChoice === "L" && computerChoice === "P") ||
        (userChoice === "R" && computerChoice === "L") ||
        (userChoice === "P" && computerChoice === "Sp")
    ) {
        wins++;
        window.alert("You win!");
    } else {
        losses++;
        window.alert("You lost!");
    }

    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    var playAgain = window.confirm("Play again?");

    if (playAgain) {
        Game();
    }
}

Game();