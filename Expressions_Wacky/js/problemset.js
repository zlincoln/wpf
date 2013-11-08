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
favDrinks = favFoods.split(',');
favDesserts = favDesserts.split(',');

//check to see if user entered three comma separated items
if(favFoods.length != 3 || favDrinks.length != 3 || favDesserts.length != 3){
	alert('Please enter three of each item separated by commas');
}

//attach functionality to javascript array
Array.prototype.getRandomFavorite = function(){
	return this[Math.floor(Math.random() * this.length)]
}

//create varable to pour parings into
var pairingSuggestions;

for(var i = 0; i < 3; i++){
	var randomFood = favFoods.getRandomFavorite;
	favFoods.push(randomFood);
	var randomDrink = favDrinks.getRandomFavorite;
	favDrinks.push(randomDrink);
	var randomDessert = favDesserts.getRandomFavorite;
	favDesserts.push(randomDessert);
	pairingSuggestions[] = randomFood+' + '+randomDrink+' + '+randomDessert;
}