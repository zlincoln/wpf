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
	//else everything is good
	}else{
		//return for storage
		return theNumber;
	}
}

//prompt for users birthday
var birthDate = numberPrompt('Whats your birthdate?  Please format in MMDDYYYY without separators.');

//prompt for favorite number
var favNumber = numberPrompt('Whats your favorite number?');

//prompt for first number that pops in their head
var firstNum = numberPrompt('Whats the first number that jumps into your head?');

//math magic for return of magic number
var magicNumber = Math.floor((birthDate*favNumber)/firstNum);

//log in console
console.log('Your special magic number is:  '+magicNumber.toString());

$(function(){
	$('body').append('<p>Your special magic number is:  '+magicNumber.toString()+'</p>');
});