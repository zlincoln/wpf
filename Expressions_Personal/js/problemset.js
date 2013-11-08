/*
Zachary Lincoln
WPF - Assignment: Expressions
11/7/13
*/

//problem: how much is it going to cost me to drive to work this week?

//prompt for days worked per week
var workDaysPerWeek = parseInt(prompt('How many days per week do you work?'));
//prompt for distance to work - multiply by two so we can calculate roundtrip
var commuteDistance = parseInt(prompt('How many miles is your commute to work (one way)?'))*2;
//prompt for milage per gallon of vehicle
var milesPerGallon = parseInt(prompt('How many miles per gallon does your vehicle get?'));

//national average 11/7/13
var priceGallonGas = 3.222;

//first calculate num of gallons needed
var totalGallonsNeeded = ((commuteDistance*workDaysPerWeek)/milesPerGallon);
//then use num of gallons needed to calc price
var totalPriceOfGallonsNeeded = totalGallonsNeeded*priceGallonGas;

var catString = 'Given your information it will cost you $'+totalPriceOfGallonsNeeded+' to drive this week.  Sorry :(';

//print to console
console.log(catString);