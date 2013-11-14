/*
Zachary Lincoln
WPF - var Assignment: Conditionals
11/13/13
*/

//problem: on a daily basis confirm whether i've done enough towards my future, and assess if it is sustainable level of effort

//prompt validation function
function validatedPrompt(promptText, errorText){
	//if error text is undefined make empty string else use the input
	errorText = (typeof errorText === 'undefined') ? '' : errorText;
	//run the prompt, combining error text with prompt text if present
	var thePrompt = parseInt(prompt(errorText+promptText));
	//if our prompt returns an empty string
	if(thePrompt == ''){
		//rerun function with error text
		validatedPrompt(promptText, 'You must provide some numeric input!  ');
	//if prompt doesn't return number (should always with parseInt!)
	}else{
		//return for storage
		return thePrompt;
	}
}

//prompt the user for how many hours they've worked - store as int
var jobHours = validatedPrompt('How many hours have you worked today?');

//start summing total hours worked by assigning how many spent on the job
var totalHoursWorked = jobHours;

//if user spent less than or equal to 6 hours working
if(jobHours <= 6){
	//push them to spend some time studying and log how many they plan to do
	studyHours = validatedPrompt('Looks like you\'ve got some time to devote to studying your career skills, how many hours do you plan to spend doing so?');
	//add the study time to total hours worked
	totalHoursWorked += studyHours;
//if user spent more than 6 hours but less than or equal to 8 hours working
}else if(jobHours > 6 && jobHours <= 8){
	//congradulate, inspire to take extra time and log how many they plan to do
	studyHours = validatedPrompt('Solid. A wise man once said, "I will do today what others will not, so tomorrow I can do what others cannot."  In that light, how many hours will you spend studying?');
	//add the study time to total hours worked
	totalHoursWorked += studyHours;
//if user spent more than 8 but less than or equal to 12 hours working
}else if(jobHours > 8 && jobHours <= 12){
	//wowed, ask if they plan on doing any more and log how many
	studyHours = validatedPrompt('I respect you highly.  I suppose with a work ethic like that, you\'ll spend some time studying too?  How many hours until you quit?');
	//add the study time to total hours worked
	totalHoursWorked += studyHours;
//if user spent more than 12 hours working
}else{
	//advise not to work anymore, but log how many hours they plan to study
	studyHours = validatedPrompt('You should do some reading on job burnout.  I highly advise you don\'t spend any time studying today, but if you plan to - how many hours?');
	//add the study time to total hours worked
	totalHoursWorked += studyHours;
}

//create a variable we can pour our advice into for return
var advice = '';

//if total hours worked is less than 8
if(totalHoursWorked < 8){
	//ask them for more effort tomorrow
	advice = 'I don\'t think you\'ve given all you\'ve got today.  Enjoy a break, but wake up tomorrow ready to conquer the world!';
//if total hours worked is greater than or equal to 8 but less than or equal to 12
}else if(totalHoursWorked >= 8 && totalHoursWorked <= 12){
	//congradulate
	advice = 'Working hard for your best friend - future you! Keep it up!';
//if total hours worked is greater than 12
}else{
	//warn them that this level of effort is unhealthy
	advice = 'Your effort is admirable, but this is not a sustainable practice in regards to work/life balance.';
}

//ternary - checks to see if our calc variable is filled - logging it if so, outputting error message if not
var conclusion = (advice != '') ? advice : 'You\'ve broken the system - I think your cleverness will take you far.';

console.log(conclusion);

$(function(){
	$('body').append('<p>'+conclusion+'</p>');
});