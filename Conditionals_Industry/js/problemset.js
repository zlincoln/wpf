/*
Zachary Lincoln
WPF - Assignment: Conditionals
11/13/13
*/

//problem: given pixel values of static mockup, return calculated percentages in css format for fluid markup


//validation for prompt expecting string
function validateSelectorPrompt(promptText, errorText){
	//if error text is undefined set to empty string, otherwise use input
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	//run the prompt, combining error text with prompt text if present
	var thePrompt = prompt(errorText+promptText);
	//if empty string
	if(thePrompt == ''){
		//call the function again with additional help text
		validateSelectorPrompt(promptText, 'Please provide some input.  ');
	//else no error
	}else{
		//return for storage
		return thePrompt;
	}
}

//validation for prompt expecting numeric value
function validateValuePrompt(promptText, errorText){
	//if error text is undefined set to empty string, otherwise use input
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	//run the prompt, combining error text with prompt text if present
	var thePrompt = parseInt(prompt(errorText+promptText));
	//if we didn't receive a number
	if(isNaN(thePrompt)){
		//call the function again with additional help text
		validateValuePrompt(promptText, 'Please provide numeric input.  ');
	//else no error
	}else{
		//return for storage
		return thePrompt;
	}
}

//validation for prompt expecting yes or no reply
function validateBooleanPrompt(promptText, errorText){
	//if error text is undefined set to empty string, otherwise use input
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	//run the prompt, combining error text with prompt text if present
	var thePrompt = prompt(errorText+promptText);
	//if empty string
	if(thePrompt == ''){
		//call the function again with additional help text
		validateBooleanPrompt(promptText, 'Please provide some input.  ');
	//else if user replies yes or true
	}else if(thePrompt == 'yes' || thePrompt == 'true'){
		//return for storage
		return true;
	//else if user replies no or false
	}else if(thePrompt == 'no' || thePrompt == 'false'){
		//return for storage
		return false;
	//else any other value
	}else{
		//call the function again with additional help text
		validateBooleanPrompt(promptText, 'Please reply "yes" or "no".  ');
	}
}

//validation/calculation function prompting pixel values per attribute - returns css string
function targetContextCalcPrompt(attribute, errorText){
	//if error text is undefined set to empty string, otherwise use input
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	//use our value validation function to grab pixel value for attribute
	var thePrompt = validateValuePrompt('What is the pixel value for '+attribute+'?  In this case all sides must be the same for simplicity - so please only provide one value.');
	//if attribute is margin
	if(attribute == 'margin'){
		//pixel to percentage conversion function is target/context = result;

		//in the case of margin the parent container is the context
		var attributeWidthPercentage = (thePrompt/parentPixelWidth)*100;
		//return css string
		return ' margin: '+thePrompt+'px '+attributeWidthPercentage+'%;';
	//else if attribute is padding
	}else if(attribute == 'padding'){
		//in the case of padding context is the width of the element itself
		var attributeWidthPercentage = (thePrompt/targetPixelWidth)*100;
		//return css string
		return ' padding: '+thePrompt+'px '+attributeWidthPercentage+'%;';
	//else there has been a programmatic error
	}else{
		//alert the dev team
		alert('developer error - possible attributes are "margin" and "padding"');
	}
}

//ask user if target if target element has margin & padding - returning the appropriate css string
function attributePrompt(){
	//check if element has padding
	var paddingBool = validateBooleanPrompt('Does the target have padding?');
	//check if element has margin
	var marginBool = validateBooleanPrompt('Does the target have margin?');

	//if user wants padding prompt for pixel values and store returned css string, otherwise set css string to no padding
	paddingValue = (paddingBool) ? targetContextCalcPrompt('padding') : ' padding: 0px';
	//if user wants margin prompt for pixel values and store returned css string, otherwise set css string to no margin
	marginValue = (marginBool) ? targetContextCalcPrompt('margin') : ' margin: 0px';

	//return concatinated css string 
	return paddingValue+marginValue;
}

//get parent selector name
var parentSelectorName = validateSelectorPrompt('Please provide a selector for the parent element.');

//get target selector name
var targetSelectorName = validateSelectorPrompt('Please provide a selector for the target element');

//get pixel width of parent
var parentPixelWidth = validateValuePrompt('What is the pixel width of the parent element?');

//get pixel widht of target
var targetPixelWidth = validateValuePrompt('What is the pixel width of the target element?');

//get css for padding & margin
var targetPaddingMargin = attributePrompt();

//get percentage value for width
var targetWidth = (targetPixelWidth/parentPixelWidth)*100;

//concatinate into css
var calcCSS = parentSelectorName+' '+targetSelectorName+'{width:'+targetWidth+'%;'+targetPaddingMargin+'}';

//log
console.log(calcCSS);

$(function(){
	$('body').append('<p>Your new css is:  '+calcCSS+'</p>');
});