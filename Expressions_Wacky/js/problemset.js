/*
Zachary Lincoln
WPF - Assignment: Expressions
11/7/13
*/

//problem: given a list of favorite foods, drinks, and desserts, make random pairings

var favFoods = prompt('List three favorite foods, separated by commas');
var favDrinks = prompt('List three favorite drinks, separated by commas');
var favDesserts = prompt('List three favorite desserts, separated by commas');

//convert strings into arrays
favFoods = favFoods.split(',');
favDrinks = favDrinks.split(',');
favDesserts = favDesserts.split(',');

//check to see if user entered three comma separated items
if(favFoods.length != 3 || favDrinks.length != 3 || favDesserts.length != 3){
	alert('Please enter three of each item separated by commas');
}

//create varable to pour parings into
var pairingSuggestions = new Array();

//create three suggestions
for(var i = 0; i < 3; i++){
	//use math.rand and array.length to select a random index (floor so we know we have a whole number)
	var randomFood = favFoods[Math.floor(Math.random() * favFoods.length)];
	var randomDrink = favDrinks[Math.floor(Math.random() * favDrinks.length)];
	var randomDessert = favDesserts[Math.floor(Math.random() * favDesserts.length)];
	//remove item from array so we don't randomly select the same element
	favFoods.splice(favFoods.indexOf(randomFood), 1);
	favDrinks.splice(favDrinks.indexOf(randomDrink), 1);
	favDesserts.splice(favDesserts.indexOf(randomDessert), 1);
	//concatinate and push into array
	pairingSuggestions.push(randomFood+' + '+randomDrink+' + '+randomDessert);
}

//concatinate for logging
var catString = 'Our expert panel recommends the following pairings: ('+pairingSuggestions[0]+'), ('+pairingSuggestions[1]+'), ('+pairingSuggestions[2]+')';

//log
console.log(catString);

$('body').append('<p>'+catString+'</p>');