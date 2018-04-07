

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

//Hold cry# to add to current score
var currentScore = 0 + crystal;

//randomly generated integer for comparison
var compRandom = 0;

$(document).ready(function(){ 
//Set up functions:

//Generate random integer between 19 and 120, inclusive
function getRandomIntInclusive(min, max) {
  compRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  $("#random").text(compRandom);
  
}
//Generate crystal value random integer between 1 and 12, inclusive
$(".crystal").click (function cryVal(min, max) {
    Math.floor(Math.random() * (max - min + 1)) + 1;
    currentScore += cryVal;
})

$("#crystal").on("click", function (){
  currentScore += crystal;
  if (currentScore > randomNumber) {
    losses++
  }
})
    

//Update wins on HTML
function updateWins() {
    document.querySelector("#win").innerHTML = "Wins: " + wins;
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

//Update losses on HTML
  function updateLosses() {
    document.querySelector("#loss").innerHTML = "Losses: " + losses;
    randomNumber = 0;
    cryOne = 0;
    cryTwo = 0;
    cryThree = 0;
    cryFour = 0;
    currentScore =0;
  }

  

 
//Call functions

    getRandomIntInclusive(19,120);

  

})