// JS16

var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {

	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;

	this.toString = function() {
		// console.log(this.name, this.calor);
		return "Food is " + this.name + ", Calories are " + this.calories + ", Vegan is " + this.vegan + ", glutenFree is " + this.glutenFree + ", citrusFree is " + citrusFree
	}

}

var food1 = new FoodItem('pizza','1000','No','No','Yes');
var food2 = new FoodItem('beans and rice','400','Yes','Yes','Yes');
var food3 = new FoodItem('fruit salad','700','Yes','Yes','No');

console.log(food1.toString());
console.log(food2.toString());
console.log(food3.toString());


var Drink = function(name, description, price, ingredients) {

	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	this.toString = function() {
		return name + ", " + description + ", " + price + ", " + ingredients
	}
}

var drink1 = new Drink('Screwdriver','Good drink','$12', [new FoodItem('orange juice', '100', 'Yes', 'No', 'No'), new FoodItem('vokda', '50')]);
console.log(drink1);
console.log(drink1.toString());
console.log(drink1.ingredients[1].calories);

var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	this.toString = function() {
		return name + ", " + description + ", " + price + ", " + ingredients
	}
}

var plate1 = new Plate('Poopoo platter','Platter o\'poo','free!',[new FoodItem('Poo', '100', 'Yes', 'No', 'No'), new FoodItem('Poo sauce')]);
var plate2 = new Plate('Combo platter','Surf and turf','Not free!',[new FoodItem('Steak', '500', 'No', 'Yes', 'Yes'), new FoodItem('Lobster','800','$30','No','Yes','Yes')]);
console.log(plate1);
console.log(plate1.toString());
console.log(plate1.ingredients[0].toString())

var Order = function(plates) {
	this.plates = plates;
}

var order1 = new Order([plate1, plate2]);
console.log(order1);
console.log(order1.plates[1].toString());


var Menu = function(plates) {
	this.plates = plates;
}

var menu1 = new Menu([plate1, plate2]);
console.log(menu1);
console.log(menu1.plates[1].toString());

var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
}

var restaurant1 = new Restaurant('Bill\'s','Dive', menu1);
console.log(restaurant1);
// console.log(restaurant1);



var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
	this.toString = function() {
		return dietaryPreference
	}
}

var customer1 = new Customer('Mexican');
console.log(customer1.toString());



$(document).on('ready', function() {
  
});