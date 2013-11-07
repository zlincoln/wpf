/*
Zachary Lincoln
WPF - Activity: Expression Worksheet
11/7/13
*/
function dogYears(sparkysAge){
	var dogAgeMultiplier = 7;
	console.log("Sparky is "+sparkysAge+" human years old which is "+(sparkysAge*dogAgeMultiplier)+" in dog years.");
}

function sliceOfPie1(numSlicePerPizza, numPeopleAtParty, numPizzasOrdered){
	var numSlicesPerPerson = (numSlicePerPizza*numPizzasOrdered)/numPeopleAtParty;
	console.log("Each person ate "+numSlicesPerPerson+" slices of pizza at the party given "+numSlicePerPizza+" slices per pizza, "+numPizzasOrdered+" pizzas ordered, and "+numPeopleAtParty+" people in attendance.");
}

function sliceOfPie2(numSlicePerPizza, numPeopleAtParty, numPizzasOrdered){
	var numSlicesPerPerson = Math.floor((numSlicePerPizza*numPizzasOrdered)/numPeopleAtParty);
	var sparkysPortion = (numSlicePerPizza*numPizzasOrdered)-(numSlicesPerPerson*numPeopleAtParty);
	console.log("Each person ate "+numSlicesPerPerson+" slices of pizza at the party given "+numSlicePerPizza+" slices per pizza, "+numPizzasOrdered+" pizzas ordered, and "+numPeopleAtParty+" people in attendance.  Therefore sparky gets "+sparkysPortion+" pieces.");
}

function averageShoppingBill(totalArray){
	var totalAmount = 0;
	var weeklyAverage = 0;
	for(var i = 0;  i<totalArray.length; i++){
		totalAmount += parseInt(totalArray[i]);
		weeklyAverage = totalAmount/totalArray.length;
	}
	console.log("You have spent a total of $"+totalAmount+" on groeries over "+totalArray.length+" weeks.  That is an average of $"+weeklyAverage+" per week.");
}

function discounts(originalPrice, discountPercentage, itemDescription, salesTaxPercentage){
	var priceWithoutTax = originalPrice*(1-(parseInt(discountPercentage)/100));
	var priceWithTax = priceWithoutTax+(priceWithoutTax*(parseInt(salesTaxPercentage)/100));
	console.log("Your "+itemDescription+" was originally $"+originalPrice+", but after a "+discountPercentage+"% discount, it is now $"+priceWithoutTax+", and $"+priceWithTax+" with tax.");
}

dogYears(8);
sliceOfPie1(8,20,10);
sliceOfPie2(8,10,4);

var totalArray = new Array(20,30,40,10,30);
averageShoppingBill(totalArray);

discounts(40,20,'widget',8);