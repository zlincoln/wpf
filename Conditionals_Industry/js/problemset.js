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
		validateSelectorPrompt(promptText, 'Please provide some input.  ');
	}else if(typeof thePrompt != 'number'){
		validateSelectorPrompt(promptText, 'Please provide numeric input.  ');
	}else{
		return thePrompt;
	}
}

var parentPixelWidth = validateValuePrompt('What is the pixel width of the parent element?');

var targetPixelWidth = validateValuePrompt('What is the pixel width of the target element?');

function validatePaddingMarginPrompt(){
	
}

var targetPaddingMargin = validatePaddingMarginPrompt();
