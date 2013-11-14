/*
Zachary Lincoln
WPF - Assignment: Conditionals
11/13/13
*/

//problem: given pixel values of static mockup, return calculated percentages in css format for responsive markup

function validateSelectorPrompt(promptText, errorText){
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	thePrompt = prompt(errorText+promptText);
	if(thePrompt == ''){
		validateSelectorPrompt(promptText, 'Please provide some input.  ');
	}else if(typeof thePrompt != 'string'){
		validateSelectorPrompt(promptText, 'Please provide plain text input.  ');
	}else{
		return thePrompt;
	}
}

var parentSelectorName = validateSelectorPrompt('Please provide a selector for the parent element.');

var targetSelectorName = validateSelectorPrompt('Please provide a selector for the target element');

function validateValuePrompt(promptText, errorText){
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	thePrompt = parseInt(prompt(errorText+promptText));
	if(thePrompt == ''){
		validateValuePrompt(promptText, 'Please provide some input.  ');
	}else if(typeof thePrompt != 'number'){
		validateValuePrompt(promptText, 'Please provide numeric input.  ');
	}else{
		return thePrompt;
	}
}

var parentPixelWidth = validateValuePrompt('What is the pixel width of the parent element?');

var targetPixelWidth = validateValuePrompt('What is the pixel width of the target element?');

function validateBooleanPrompt(promptText, errorText){
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	thePrompt = prompt(errorText+promptText);
	if(thePrompt == ''){
		validateBooleanPrompt(promptText, 'Please provide some input.  ');
	}else if(typeof thePrompt != 'string'){
		validateBooleanPrompt(promptText, 'Please provide plain text input.  ');
	}else if(thePrompt.toLowercase() == 'yes' || thePrompt.toLowercase() == 'true'){
		return true;
	}else if(thePrompt.toLowercase() == 'no' || thePrompt.toLowercase() == 'false'){
		return false;
	}
}

function targetContextCalcPrompt()

function validatePaddingMarginPrompt(){
	var paddingBool = validateBooleanPrompt('Does the target have padding?');
	var marginBool = validateBooleanPrompt('Does the target have margin?');
}

var targetPaddingMargin = validatePaddingMarginPrompt();
