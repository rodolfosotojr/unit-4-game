$(document).ready(function() {

var crystal = {
    topaz:
    {
        name: "topaz",
        value: 0
    },
    emerald:
    {
        name: "emerald",
        value: 0
    },
    ruby:
    {
        name: "ruby",
        value: 0
    },
    amber:
    {
        name: "amber",
        value: 0
    }
};

//Create the variable for the current score, target score, wins, and losses

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

//Create the random number function for target score and current score

var getRandomValue = function(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;

};

//Creat the start of the game function
var gameStart = function() {

currentScore = 0;

//Create the random value and assign the random value to the targetScore
targetScore = getRandomValue(19,120);

//Create the random values for each crystal
crystal.topaz.value = getRandomValue(1,12);
crystal.emerald.value = getRandomValue(1,12);
crystal.ruby.value = getRandomValue(1,12);
crystal.amber.value = getRandomValue(1,12);

$("#score").text(currentScore);
$("#targetScore").text("Target Number: " + targetScore);

//Console.log will not run until gameStart function is called, which I havent called just yet
console.log(crystal.topaz.value);
console.log(crystal.emerald.value);
console.log(crystal.ruby.value);
console.log(crystal.amber.value);
console.log(targetScore);



};


//Create a function to check to see if the user has won/lost
var checkWin = function() {
    if (currentScore > targetScore) {
        alert("No Soup For You!!");
        console.log("You Lost");

        //Add to the loss count
        lossCount++;
        $("#losses-text").text("Losses = " + lossCount);

        //restart game because the user has lost
        gameStart();
    }
    //Create else if statement to see if the user has solved the game
    else if (currentScore === targetScore) {
        alert("Winner! Winner! Chicken Dinner!");
        console.log("You Win!");

        //Add to the win count
        winCount++;

        $("#wins-text").text("Wins = " + winCount);

        //restart game because the user has won
        gameStart();
    }
};

//Create a variable that adds the values of the crystals to the current score
var addValues = function(crystal) {

    //The current score is equal to the previous value plus the value of the crytal clicked
    currentScore += crystal.value;

    //JQuery to add the current score to the text of the HTML id "score" 
    $("#score").text(currentScore);

    //Run function (checkWin) to see if the current score is equal to the target score[funtion defined above]
    checkWin();
}
//Call function to start game. This is outside the Scope of the checkWin function so the game hasn't called the game to start
gameStart();

//Add the click function and give the values of each crystal

$("#topaz").click(function() {
    addValues(crystal.topaz);
});

$("#emerald").click(function() {
    addValues(crystal.emerald);
});

$("#ruby").click(function() {
    addValues(crystal.ruby);
});

$("#amber").click(function() {
    addValues(crystal.amber);
});

});





// $(document).ready(function() {
// //Create the random number


// //Give crystals a random value  between 1-12
// $("#img-ruby").on("click", function() {
//     var rubyValue = "";

//     for(var i = 1; i <12; i++) {

//         var random = Math.floor(Math.random() * 12 + 1);

//         rubyValue = random + rubyValue;

//         console.log(rubyValue);

//     }

//     $("#img-ruby").append("#score") + rubyValue;

// })


// })


