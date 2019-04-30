console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push("cardOne");
cardsInPlay.push("cardTwo");

console.log("User flipped " + cardOne)
console.log("User flipped " + cardTwo)

/**if (cardsInPlay length is 2) {

if (cardOne is equal to cardTwo){
 alert "You found a match"
}

else {
alert "Sorry, try again"
}

}**/

if (cardsInPlay.length === 2) {
if(cardOne === cardTwo){
 alert("You found a match")
}
 
else {
 alert("Sorry, try again")
}
}



