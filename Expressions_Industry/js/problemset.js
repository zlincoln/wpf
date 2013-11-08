/*
Zachary Lincoln
WPF - Assignment: Expressions
11/7/13
*/

//Problem: given a skill and number of hours practiced, how many hours until you are technically a master?

//get name of skill and remove whitespace
var skill = prompt('What skill do you practice to be good at your job?  For example - if you are a web developer, a skill might be "javascript"').trim;
//get number of years practiced
var yearsPracticed = parseInt(prompt('How many years have you been actively practicing the skill (numeric)?'));
//get number of hours practiced per week
var avgHoursWeek = parseInt(prompt('How many hours per week do you dedicate to practicing (numeric)?'));

//they say that to be considered a master, you need to have practiced for ten thousand hours
var reqHoursForMastery = 10000;

//calc hours practiced by calc hours practiced per year multiplied by number of years
var hoursPracticed = (avgHoursWeek*52)*yearsPracticed;
//get num of hours remaining until mastery
var timeRemaining = reqHoursForMastery - hoursPracticed;

//if time remaining then output, else congradulate
var catString = (timeRemaining > 0) ? 'You have '+timeRemaining+' hours left of practice until you are considered a master.  Go get em!' : 'YOU ARE A MASTER';

//log
console.log(catString);