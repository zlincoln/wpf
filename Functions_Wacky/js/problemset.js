/*
Zachary Lincoln
WPF - Assignment: Functions
11/21/13
*/

//get the magic number

function numberPrompt(promptText, errorText){
	errorText = (typeof errorText == 'undefined') ? '' : errorText;

	var theNumber = parseInt(prompt(errorText+promptText));

	if(isNaN(theNumber)){
		numberPrompt(promptText, 'Please provide numeric input.  ');
	}else{
		return theNumber;
	}
}

var birthDate = numberPrompt('Whats your birthdate?  Please format in MMDDYYYY without separators.');

var favNumber = numberPrompt('Whats your favorite number?');

var firstNum = numberPrompt('Whats the first number that jumps into your head?');

var magicNumber = Math.floor((birthDate*favNumber)/firstNum);

console.log('Your special magic number is:  '+magicNumber.toString());