/*
Zachary Lincoln
WPF - Assignment: Functions
11/21/13
*/

//password generator

function promptForPassParts(promptText, errorText){
	//falback for no errortext
	errorText = (typeof errorText == 'undefined') ? '' : errorText;

	var suppliedWordString = prompt(errorText+promptText);
	
	if(suppliedWordString == ''){
		promptForPassParts(promptText, 'Please provide some input.  ');
	}else{
		var relevantWords = suppliedWordString.split(',');
	}

	if(relevantWords.length < 4){
		promptForPassParts(promptText, 'Please provide at least 4 words.  ');
	}else{
		return relevantWords;
	}
}

function numberPrompt(promptText, errorText){
	errorText = (typeof errorText == 'undefined') ? '' : errorText;

	var luckyNumber = parseInt(prompt(errorText+promptText));

	if(isNaN(luckyNumber)){
		numberPrompt(promptText, 'Please provide a number.  ');
	}else{
		return luckyNumber;
	}
}

var password = {
	"wordString": '',
	"randSpecialChar": ['!','*','%','$'],
	simple: function(wordArray){
		if(this.wordString == ''){
			wordArray.sort(function(){return 0.5 - Math.random()});
			for(var i = 0; i < 4; i++){
				var passPiece = wordArray.pop();
				this.wordString += passPiece.trim();
			}
		}
		return this.wordString;
	},
	maxSecurity: function(wordArray, number){
		if(this.wordString == ''){
			wordArray.sort(function(){return 0.5 - Math.random()});
			for(var i = 0; i < 4; i++){
				var passPiece = wordArray.pop();
				this.wordString += passPiece.trim();
			}
		}
		this.randSpecialChar.sort(function(){return 0.5 - Math.random()});
		return this.randSpecialChar.pop()+this.wordString+number;
	}
}

var passPartsArray = promptForPassParts('In a comma separated list, can you provide a list of words that have relevance to you?  Please provide at least four.');

var luckyNumber = numberPrompt('What\'s your lucky number?');

console.log('Simple Password:  '+password.simple(passPartsArray));
console.log('Max Security Password:  '+password.maxSecurity(passPartsArray,luckyNumber));


