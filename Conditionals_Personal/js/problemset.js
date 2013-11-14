/*
Zachary Lincoln
Assignment: Conditionals
11/13/13
*/

var jobHours = parseInt(prompt('How many hours have you worked today?'));

var totalHoursWorked = jobHours;

if(jobHours <= 6){
	studyHours = parseInt(prompt('Looks like you\'ve got some time to devote to studying your career skills, how many hours do you plan to spend doing so?'));
	totalHoursWorked += studyHours;
}else if(jobHours > 6 && jobHours <= 8){
	studyHours = parseInt(prompt('Solid. A wise man once said, "I will do today what others will not, so tomorrow I can do what others cannot."  In that light, how many hours will you spend studying?'));
	totalHoursWorked += studyHours;
}else if(jobHours > 8 && jobHours <= 12){
	studyHours = parseInt(prompt('I respect you highly.  I suppose with a work ethic like that, you\'ll spend some time studying too?  How many hours until you quit?'));
	totalHoursWorked += studyHours;
}else{
	studyHours = parseInt(prompt('You should do some reading on job burnout.  I highly advise you don\'t spend any time studying today, but if you plan to - how many hours?'));
	totalHoursWorked += studyHours;
}

var advice = '';

if(totalHoursWorked < 8){
	advice = 'I don\'t think you\'ve given all you\'ve got today.  Enjoy a break, but wake up tomorrow ready to conquer the world!';
}else if(totalHoursWorked >= 8 && totalHoursWorked <= 12){
	advice = 'Working hard for your best friend - future you! Keep it up!';
}else{
	advice = 'Your effort is admirable, but this is not a sustainable practice in regards to work/life balance.';
}

if(advice != '') ? console.log(advice) : console.log('You\'ve broken the system - I think your cleverness will take you far.');