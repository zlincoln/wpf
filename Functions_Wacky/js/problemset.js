/*
Zachary Lincoln
WPF - Assignment: Functions
11/21/13
*/

//get the magic number

function numberPrompt(promptText, errorText){
	errorText = (typeof errorText == 'undefined') ? '' : errorText;

	var theNumber = prompt(errorText+promptText);

	if(isNaN(theNumber)){
		numberPrompt(promptText, 'Please provide numeric input.  ');
	}

}