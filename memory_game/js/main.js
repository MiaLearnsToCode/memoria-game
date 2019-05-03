console.log("Up and running!");
//Array of cards options
var cards = [
{
	word: "dog",
	language: "english",
	cardImage: "images/dog-en.jpg"
},
{
	word: "cat",
	language: "english",
	cardImage: "images//cat-en.jpg"
},
{
	word: "dog",
	language: "italian",
	cardImage: "images//dog-it.jpg"
},
{
	word: "milk",
	language: "english",
	cardImage: "images/milk-en.jpg"
},
{
	word: "cat",
	language: "italian",
	cardImage: "images//cat-it.jpg"
},
{
	word: "milk",
	language: "italian",
	cardImage: "images//milk-it.jpg"
},
{
	word: "bread",
	language: "italian",
	cardImage: "images//bread-it.jpg"
},
{
	word: "bread",
	language: "english",
	cardImage: "images//bread-en.jpg"
},
];
//Array of the cards picked by the player
var cardsInPlay = [];

//function checks if the cards picked are the same 
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("Congratulations, You found a match! Refresh the page to play again");
	refreshBoard();
} 
	else {
  	alert("Sorry, not a match! Refresh the page to play again");
  	refreshBoard();
	}
}

//
function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].word);
	cardsInPlay.push(cards[cardId].word);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].language);
//matches the images with the src
	this.setAttribute('src', cards[cardId].cardImage);

//check if two cards were played and runs the alert function
	if (cardsInPlay.length === 2) {
	checkForMatch();
	}
}

// create a new game
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.jpg");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	}
}

function refreshBoard() {
	cardsInPlay = []
	var allCards = document.getElementsByTagName('img')
	while (allCards[0]) {
		allCards[0].parentNode.removeChild(allCards[0]);
	}
	createBoard();
}

createBoard();








