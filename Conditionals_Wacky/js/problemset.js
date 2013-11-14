/*
Zachary Lincoln
WPF - Assignment: Conditionals
11/13/13
*/

//problem: find your spirit animal

function validatePreferencePrompt(promptText, type, errorText){
	//if error text is undefined make empty string else use the input
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	if(type == 'angerAction'){
		var optionsArray = array('yell', 'attack', 'escape');
	}else if(type == 'safetyPreference'){
		var optionsArray = array('in a tank', 'armed with deadly weapons', 'expertly hidden');
	}else{
		//dev error
		alert('Your "type" options are: "angerAction" and "safetyPreference"');
	}
	//run the prompt, combining error text with prompt text if present
	var thePrompt = prompt(errorText+promptText);
	if(thePrompt == ''){
		validatePreferencePrompt(promptText, type, 'Please enter an option.  ');
	}else if(!optionsArray.indexOf(thePrompt) > -1){
		validatePreferencePrompt(promptText, type, 'Please choose from the options listed.  Check spelling, use lowercase, and don\'t add quotes.  ');
	}else{
		return thePrompt;
	}
}

var opt1 = validatePreferencePrompt('When someone makes you angry, are you more apt to: "yell", "attack", or "escape"?', 'angerAction');

var opt2 = validatePreferencePrompt('Would you feel safer: "in a tank", "armed with deadly weapons", "expertly hidden"', 'safetyPreference');

var spiritAnimal = '';

switch(opt1)
{
	case 'yell':
		if(opt2 == 'in a tank'){
			spiritAnimal = 'blue whale';
		}else if(opt2 == 'armed with deadly weapons'){
			spiritAnimal = 'lion';
		}else if(opt2 == 'expertly hidden'){
			spiritAnimal = 'bat';
		}else{
			alert('dev error');
		}
		break;
	case 'attack':
		if(opt2 == 'in a tank'){
			spiritAnimal = 'hippo';
		}else if(opt2 == 'armed with deadly weapons'){
			spiritAnimal = 'cobra';
		}else if(opt2 == 'expertly hidden'){
			spiritAnimal = 'octopus';
		}else{
			alert('dev error');
		}
		break;
	case 'escape':
		if(opt2 == 'in a tank'){
			spiritAnimal = 'armadillo';
		}else if(opt2 == 'armed with deadly weapons'){
			spiritAnimal = 'electric eel';
		}else if(opt2 == 'expertly hidden'){
			spiritAnimal = 'arctic fox';
		}else{
			alert('dev error');
		}
		break;
	default:
		alert('dev error');
}

var conclusion = (spiritAnimal != '') ? 'Your spirit animal is the '+spiritAnimal+'.' : 'Your spirit animal is the crazy housecat - because you break everything.';

console.log(conclusion);