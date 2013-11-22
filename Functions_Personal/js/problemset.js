/*
Zachary Lincoln
WPF - Assignment: Functions
11/21/13
*/

//password generator

function promptForPassParts(promptText, errorText){
	//falback for no errortext
	errorText = (typeof errorText == 'undefined') ? '' : errorText;

	//prompt for user input
	var suppliedWordString = prompt(errorText+promptText);
	
	//check for null
	if(suppliedWordString == ''){
		//if null prompt again and explain why
		promptForPassParts(promptText, 'Please provide some input.  ');
	//else not null
	}else{
		//split into array on commas
		var relevantWords = suppliedWordString.split(',');
	}
	//if not enough parts
	if(relevantWords.length < 4){
		//prompt again and explain why
		promptForPassParts(promptText, 'Please provide at least 4 words.  ');
	//else return the array of relevant words
	}else{
		//return for capture
		return relevantWords;
	}
}

function numberPrompt(promptText, errorText){
	//fallback for no error text
	errorText = (typeof errorText == 'undefined') ? '' : errorText;

	//prompt for input
	var luckyNumber = parseInt(prompt(errorText+promptText));

	//if we didn't get a number
	if(isNaN(luckyNumber)){
		//prompt again and explain why
		numberPrompt(promptText, 'Please provide a number.  ');
	//else return the number
	}else{
		//return for storage
		return luckyNumber;
	}
}

//create password object literal
var password = {
	//create empty string for storage later
	"wordString": '',
	//create array of special characters
	"randSpecialChar": ['!','*','%','$'],
	//function to return simple password
	simple: function(wordArray){
		//if we haven't already generated a random string
		if(this.wordString == ''){
			//sort their input array randomly
			wordArray.sort(function(){return 0.5 - Math.random()});
			//grab four pieces
			for(var i = 0; i < 4; i++){
				//pop from array so we don't use the same word twice
				var passPiece = wordArray.pop();
				//store in object trimming whitespace
				this.wordString += passPiece.trim();
			}
		}
		//return the random word string
		return this.wordString;
	},
	//function to return complex password
	maxSecurity: function(wordArray, number){
		//if we haven't already generated a random string
		if(this.wordString == ''){
			//sort their input array randomly
			wordArray.sort(function(){return 0.5 - Math.random()});
			//grab four pieces
			for(var i = 0; i < 4; i++){
				//pop from array so we don't use the same word twice
				var passPiece = wordArray.pop();
				//store in object trimming whitespace
				this.wordString += passPiece.trim();
			}
		}
		//randomly sort the object's special characters
		this.randSpecialChar.sort(function(){return 0.5 - Math.random()});
		//get the first letter to capitalize
		var firstLetter = this['wordString'].slice(0,1).toUpperCase();
		//return a concatinated string
		return this.randSpecialChar.pop()+firstLetter+this['wordString'].slice(1,this['wordString'].length)+number;
	}
}

//run our word array prompt function
var passPartsArray = promptForPassParts('In a comma separated list, can you provide a list of words that have relevance to you?  Please provide at least four.');

//run our number prompt function
var luckyNumber = numberPrompt('What\'s your lucky number?');

//log the simple password passing our inputs as parameters
console.log('Simple Password:  '+password.simple(passPartsArray));
//log our complicated password passing our inputs and parameters
console.log('Max Security Password:  '+password.maxSecurity(passPartsArray,luckyNumber));

$(function(){
	$('body').append('<p>Your simple password is:  '+password.simple(passPartsArray)+'</p>').append('<p>Your max security password is:  '+password.maxSecurity(passPartsArray,luckyNumber)+'</p>');
});