/*
Zachary Lincoln
WPF - Assignment: Expressions
11/7/13
*/

//Problem: given a skill and number of hours practiced, how many hours until you are technically a master?

var skill = prompt('What skill do you practice to be good at your job?  For example - if you are a web developer, a skill might be "javascript"').trim;
var yearsPracticed = parseInt(prompt('How many years have you been actively practicing the skill (numeric)?'));
var avgHoursWeek = parseInt(prompt('How many hours per week do you dedicate to practicing (numeric)?'));

//they say that to be considered a master, you need to have practiced for ten thousand hours
var reqHoursForMastery = 10000;

