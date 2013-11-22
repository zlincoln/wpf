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
	"randSpecialChar": ['!','*','%','$'],
	simple: function(wordArray, number){
		wordArray.sort(function(){return 0.5 - Math.random()});
		return wordArray.pop()+wordArray.pop()+wordArray.pop()+wordArray.pop()+number;
	},
	maxSecurity: function(wordArray, number){
		
	}
}

var passPartsArray = promptForPassParts('In a comma separated list, can you provide a list of words that have relevance to you?  Please provide at least four.');

var luckyNumber = numberPrompt('What\'s your lucky number?');

