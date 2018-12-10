//Set global variables

var wins = 0;
var losses = 0;

var targetScore;
var yourScore;


var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;

//Function to reset game. Called onload, or when game won or lost.

function resetGame() {
    yourScore = 0;
    targetScore = 19 + Math.floor(Math.random() * 100);
    console.log(targetScore);
    $("#targetScoreDisplay").text(targetScore);
    $("#yourScoreDisplay").text(yourScore);

    crystalValue1 = 1 + Math.floor(Math.random() * 12);
    crystalValue2 = 1 + Math.floor(Math.random() * 12);
    crystalValue3 = 1 + Math.floor(Math.random() * 12);
    crystalValue4 = 1 + Math.floor(Math.random() * 12);

};

//Function to reset score when game is won or lost.

function setScore() {
    $("#winsDisplay").text(wins);
    $("#lossesDisplay").text(losses);
}


$(document).ready(function(){

    //1- Event listener runs function when first crystal clicked.

    $("#crystal1").on("click", function() {

        //Increase yourScore by the current value of the crystal
        yourScore += crystalValue1;

        if (targetScore > yourScore) {
            $("#yourScoreDisplay").text(yourScore);
            return;
        }

        else if (targetScore == yourScore) {
            wins++;
            $("#winsDisplay").text(wins);
            resetGame();
            return;
        }

        else {
            losses++;
            $("#lossesDisplay").text(losses);
            resetGame();
        }

    });


//2- Event listener runs function when second crystal clicked.

    $("#crystal2").on("click", function() {

        //Increase yourScore by the current value of the crystal
        yourScore += crystalValue2;
    

        if (targetScore > yourScore) {
            $("#yourScoreDisplay").text(yourScore);
            return;
        }

        else if (targetScore == yourScore) {
            wins++;
            $("#winsDisplay").text(wins);
            resetGame();
            return;
        }

        else {
            losses++;
            $("#lossesDisplay").text(losses);
            resetGame();
        }

    });

    //3- Event listener runs function when third crystal clicked.

    $("#crystal3").on("click", function() {

        //Increase yourScore by the current value of the crystal
        yourScore += crystalValue3;


        if (targetScore > yourScore) {
            $("#yourScoreDisplay").text(yourScore);
            return;
        }

        else if (targetScore == yourScore) {
            wins++;
            $("#winsDisplay").text(wins);
            resetGame();
            return;
        }

        else {
            losses++;
            $("#lossesDisplay").text(losses);
            resetGame();
        }

    });

    //4- Event listener runs function when fourth crystal clicked.

    $("#crystal4").on("click", function() {

        //Increase yourScore by the current value of the crystal
        yourScore += crystalValue4;


        if (targetScore > yourScore) {
            $("#yourScoreDisplay").text(yourScore);
            return;
        }

        else if (targetScore == yourScore) {
            wins++;
            $("#winsDisplay").text(wins);
            resetGame();
            return;
        }

        else {
            losses++;
            $("#lossesDisplay").text(losses);
            resetGame();
        }

    });

});