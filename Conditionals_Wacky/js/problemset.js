/*
Zachary Lincoln
WPF - Assignment: Conditionals
11/13/13
*/

//problem: find your spirit animal

function validateAngerActionPrompt(promptText, type, errorText){
	//if error text is undefined make empty string else use the input
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	if(type == 'angerAction'){
		var optionsArray = array('yell', 'attack', 'escape');
	}else if(type == 'safetyPreference'){
		var optionsArray = array('in a tank', 'armed with deadly weapons', 'expertly hidden');
	}else{
		//dev error
	}
	//run the prompt, combining error text with prompt text if present
	var thePrompt = prompt(errorText+promptText);
	if(thePrompt == ''){
		validatePreferencePrompt(promptText, type, )
	}
	else if(optionsArray.indexOf(thePrompt))
}

var angerAction = prompt('When someone makes you angry, are you more apt to: "yell", "attack", or "escape"?');

var safetyPreference = prompt('Would you feel safer: "in a tank", "armed with deadly weapons", "expertly hidden"');

//combos

//yell,tank
	//blue whale
//yell,weapon
	//lion
//yell,hidden
	//bat

//attack,tank
	//hippo
//attack,weapon
	//cobra
//attack,hidden
	//octopus

//escape,tank
	//armadillo
//escape,weapon
	//electric eel
//escape,hidden
	//arctic fox