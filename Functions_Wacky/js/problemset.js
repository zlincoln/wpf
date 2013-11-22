/*
Zachary Lincoln
WPF - Assignment: Functions
11/21/13
*/

//get the magic number

//create number prompt validation function
function numberPrompt(promptText, errorText){
	//fallback for error text
	errorText = (typeof errorText == 'undefined') ? '' : errorText;

	//get the number
	var theNumber = parseInt(prompt(errorText+promptText));

	//if no number
	if(isNaN(theNumber)){
		//call the prompt again and explain why
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