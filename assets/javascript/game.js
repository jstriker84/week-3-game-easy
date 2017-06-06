var wins = 0;
var lose = 0;
var guessesLeft = 10;
var guessesSoFar = "";

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	for(var i=0; i < computerChoices.length; i++) {
	if (userGuess === computerGuess) {
		wins++

	} else {lose++;
		guessesLeft -1;
		guessesSoFar = userGuess + guessesSoFar};
	if (guessesLeft = 0) {

	}
};
};