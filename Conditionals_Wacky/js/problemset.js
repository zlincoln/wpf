/*
Zachary Lincoln
WPF - Assignment: Conditionals
11/13/13
*/

//problem: find your spirit animal

function validatePreferencePrompt(promptText, type, errorText){
	//if error text is undefined make empty string else use the input
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	//if defined type is 'angerAction'
	if(type == 'angerAction'){
		//build array for anger actions
		var optionsArray = new Array('yell', 'attack', 'escape');
	//if defined type is 'safetyPreference'
	}else if(type == 'safetyPreference'){
		//build array for safety preferences
		var optionsArray = new Array('in a tank', 'armed with deadly weapons', 'expertly hidden');
	//else type is not defined correctly
	}else{
		//show dev error
		alert('Your "type" options are: "angerAction" and "safetyPreference"');
	}
	console.log(optionsArray);
	//run the prompt, combining error text with prompt text if present
	var thePrompt = prompt(errorText+promptText);
	//if the user didn't type anything
	if(thePrompt == ''){
		//call the function again with additional help text
		validatePreferencePrompt(promptText, type, 'Please enter an option.  ');
	//else if the user string wasn't found in the options array
	}else if(optionsArray.indexOf(thePrompt) == -1){
		//call the function again with additional help text
		validatePreferencePrompt(promptText, type, 'Please choose from the options listed.  Check spelling, use lowercase, and don\'t add quotes.  ');
	//else everything is gravy
	}else{
		//return for storage
		return thePrompt;
	}
}

//the user is prompted for their first situtional preference
var opt1 = validatePreferencePrompt('When someone makes you angry, are you more apt to: "yell", "attack", or "escape"?', 'angerAction');

//the user is prompted for their second situtional preference
var opt2 = validatePreferencePrompt('Would you feel safer: "in a tank", "armed with deadly weapons", "expertly hidden"', 'safetyPreference');

//set up variable to pour decision into
var spiritAnimal = '';

//check value of opt1
switch(opt1)
{
	//if value is yell
	case 'yell':
		//check value of opt2
		if(opt2 == 'in a tank'){
			//assign spirit animal
			spiritAnimal = 'blue whale';
		}else if(opt2 == 'armed with deadly weapons'){
			spiritAnimal = 'lion';
		}else if(opt2 == 'expertly hidden'){
			spiritAnimal = 'bat';
		//else we've had a dev error
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
	//no valid value for opt1
	default:
		//show dev error
		alert('dev error');
}

//check if we've successfully chosen a spirt animal, concatinating a conclusion string if so, otherwise notifying that the system has been broken
var conclusion = (spiritAnimal != '') ? 'Your spirit animal is the '+spiritAnimal+'.' : 'Your spirit animal is the crazy housecat - because you break everything.';

//log
console.log(conclusion);

$(function(){
	$('body').append('<p>'+conclusion+'</p>');
});