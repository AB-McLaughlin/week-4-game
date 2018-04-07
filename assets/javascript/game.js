

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

//define min/max
var min1 = 1;
var max1 = 12;

//Hold cry# to add to current score
var currentScore = 0 + cryOne;

//randomly generated integer for comparison
var compRandom = 0;

$(document).ready(function(){ 
//Set up functions:

//Generate random integer between 19 and 120, inclusive
function getRandomIntInclusive(min, max) {
  compRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  $("#random").text(compRandom);
}

  getRandomIntInclusive(19,120);

//Generate crystal1 value random integer between 1 and 12, inclusive
  $("#crystal1").click (function() {
  cryOne = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    
    console.log(cryOne);
  })

//Generate crystal2 value random integer between 1 and 12, inclusive
  $("#crystal2").click (function() {
  cryTwo = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
   
  console.log(cryTwo);
  })

//Generate crystal3 value random integer between 1 and 12, inclusive
  $("#crystal3").click (function() {
  cryThree = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
 
  console.log(cryThree);
  })

//Generate crystal4 value random integer between 1 and 12, inclusive
  $("#crystal4").click (function() {
  cryFour = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
  
  console.log(cryFour);
  })

//When a crystal button is clicked, add the crystal value to the currentScore
  //If currentScore is larger than the randomNumber, its a loss
  //If currentScore is equal to randomNumber, its a win
$("#crystal").on("click"), function (){
  currentScore += cryOne;
  $("#currentScore").text(currentScore);
  
  if (currentScore > randomNumber) {
    losses++;
  
  } else (currentScore = randomNumber) ;{
    wins++;
  }    
}
    

//Update wins on HTML
function updateWins() {
    $("#win").html = "Wins: " + wins;
    $("button").click(function(){
      $("div").empty();
  });
    randomNumber = 0;
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

  //Call functions


  cryVal1(1, 12);
  cryVal2(1, 12);
  cryVal3(1, 12);
  cryVal4(1, 12);

 

  

  

}})