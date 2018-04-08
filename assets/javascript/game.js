

//Set up variables:

//tallies wins
var wins = 0;

//tallies losses
var losses = 0;

//random value of crystals
var cryOne = 0;
var cryTwo = 0;
var cryThree = 0;
var cryFour = 0;

//define min/max for crystal buttons
var min1 = 1;
var max1 = 12;

//Hold cry# to add to current score
var currentScore = 0;

//randomly generated integer for comparison
var compRandom = 0;

$(document).ready(function(){ 

//Set up functions:

//Generate random integer between 19 and 120, inclusive
function getRandomIntInclusive(min, max) {
  compRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  $("#random").text(compRandom);
}
//run function for random choice
  getRandomIntInclusive(19,120);

//Generate crystal1 value random integer between 1 and 12, inclusive
  $("#crystal1").click (function() {
  cryOne = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
  winLoss();
  })

//Generate crystal2 value random integer between 1 and 12, inclusive
  $("#crystal2").click (function() {
  cryTwo = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
  currentScore += cryTwo; 
  winLoss();
  })

//Generate crystal3 value random integer between 1 and 12, inclusive
  $("#crystal3").click (function() {
  cryThree  = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
  currentScore += cryThree;
  winLoss();
   })

//Generate crystal4 value random integer between 1 and 12, inclusive
  $("#crystal4").click (function() {
  cryFour = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
  currentScore += cryFour;
  winLoss();
    })

//When a crystal button is clicked, add the crystal value to the currentScore
  //If currentScore is larger than the randomNumber, its a loss
  //If currentScore is equal to randomNumber, its a win
  //Otherwise, print current score
  $("#crystal").on("click"), function winLoss(){
    currentScore += CryOne
    if (currentScore > randomNumber) {
    losses++;
    updateLosses();
    }
    if (currentScore = randomNumber); {
    wins++;
    updateWins();
    }
    $("#currentScore").text(currentScore);
    }    
    
   
  //Update wins on HTML
  function updateWins() {
    $("#win").html = "Wins: " + wins;
    $("button").click(function(){
      $("div").empty();
  });
    randomNumber = 0
    cryOne = 0;
    cryTwo = 0;
    cryThree = 0;
    cryFour = 0;
    currentScore =0;
    
//Update losses on HTML
  function updateLosses() {
    $("#loss").html = "Losses: " + losses;
    $("button").click(function(){
      $("div").empty();
  });
    randomNumber = 0;
    cryOne = 0;
    cryTwo = 0;
    cryThree = 0;
    cryFour = 0;
    currentScore =0;
}

 
}})