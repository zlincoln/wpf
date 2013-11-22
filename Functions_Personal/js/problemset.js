/*
Zachary Lincoln
WPF - Assignment: Functions
11/21/13
*/

//password generator

function promptForPassParts(promptText, errorText){
	errorText = (typeOf errorText == 'undefined') ? '' : errorText;

	var suppliedWordString = prompt(errorText+'  '+promptText);
	var relevantWords = suppliedWordString.split(',');

	if(relevantWords.length >= 4){
		promptForPassParts(promptText, 'Please provide at least 4 words.');
	}else{
		return relevantWords;
	}
}

function numberPrompt(promptText, errorText){
	errorText = (typeOf errorText == 'undefined') ? '' : errorText;

	var luckyNumber = parseInt(prompt(errorText+'  '+promptText));

	if(isNaN(luckyNumber)){
		numberPrompt(promptText, 'Please provide a number.');
	}else{
		return luckyNumber;
	}
}

var Password = {
	"wordString": '',
	"randSpecialChar": ['!','*','%','$'],
	simple: function(wordArray, number){
		if(this.wordString == ''){
			wordArray.sort(function(){return 0.5 - Math.random()});
			for(var i = 0; i < 4; i++){
				var passPiece = wordArray.pop();
				this.wordString += passPiece.trim();
			}
		}
		return this.wordString+number;
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
		return this.wordString.charAt(0).toUppercase()+this.wordString.slice(1)+number+this.randSpecialChar.pop();
	}
}

var passPartsArray = promptForPassParts('In a comma separated list, can you provide a list of words that have relevance to you?  Please provide at least four.');

var luckyNumber = numberPrompt('What\'s your lucky number?');

var userPass = new Password();

console.log(userPass.simple(passPartsArray,luckyNumber));
console.log(userPass.maxSecurity(passPartsArray,luckyNumber));


