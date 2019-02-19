/* Steps to be taken
- Create function that will Generate random number
- display random number generated to the `random-number` div
- create function that will generate a random number for each picture
- when user clicks the picture, display the value
- whenever the value is displayed, add it to last value
- if value of user > the value provided by the console, the user loses
- reset javascript without having to reload the page
*/

$('document').ready(function () {

var computerDecision = null
var wins = 0;
var losses = 0;
var playerTotal = 0;

var computerChoice = function () {
    computerDecision = Math.floor(Math.random() * 40 + 10);
    // Numbers between 10 and 40
    return computerDecision;    
}

computerChoice();
console.log(computerDecision);
 
// display of pc generated random number
var computerChoiceText = document.getElementById('random-number');
computerChoiceText.innerHTML = computerDecision.toString();
});

// each picture gets random number
var greenJewel = Math.floor(Math.random() * 10);
var orangeJewel = Math.floor(Math.random() * 10);
var purpleJewel = Math.floor(Math.random() * 10);
var tealJewel = Math.floor(Math.random() * 10);

console.log(greenJewel);
console.log(orangeJewel);
console.log(purpleJewel);
console.log(tealJewel); 

// game reset
var reset = function (){
    computerChoice();
    greenJewel;
    orangeJewel;
    purpleJewel;
    tealJewel;
    playerTotal = 0;
}

var rules = function(){
    if (playerTotal > computerDecision) {
    losses++
    document.getElementById('loss').innerHTML = losses 
    reset();
    } else if (playerTotal === computerDecision){
    wins++
    reset();
    }
}

// each time the picture gets clicked, the value displays in the provided div
$("#green").on("click", function() {
    playerTotal = playerTotal + greenJewel;
    document.getElementById('total-score-display').innerHTML = greenJewel;
    rules();  
    console.log(playerTotal);
});

$("#orange").on("click", function() {
    playerTotal = playerTotal + orangeJewel;
    document.getElementById('total-score-display').innerHTML = orangeJewel;    
    rules();  
    console.log(playerTotal);
});

$("#purple").on("click", function() {
    playerTotal = playerTotal + purpleJewel;
    document.getElementById('total-score-display').innerHTML = purpleJewel;    
    rules();  
    console.log(playerTotal);
});
$("#teal").on("click", function() {
    playerTotal = playerTotal + tealJewel;
    document.getElementById('total-score-display').innerHTML = tealJewel;    
    rules();  
    console.log(playerTotal);
});




