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


	this.create = function(){

		return $('<div class="food-item">').text(name);
	}


}


var Drink = function(name, description, price, ingredients) {

	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	this.toString = function() {
		return name + ", " + description + ", " + price + ", " + ingredients
	}
	this.create = function(){

		return $('<div class="drink">').text(name);
	}


}

 

var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	this.toString = function() {
		return name + ", " + description + ", " + price + ", " + ingredients
	}
	this.isVegan = function() {
		// console.log(this.ingredients.length);
		var flag = true;
		for (var i = 0; i < this.ingredients.length; i++) {
			// console.log("Found " + this.ingredients[i].vegan);
			if (this.ingredients[i].vegan === "No") { flag = false; }
		};
		return flag;
	}
	this.isGlutenFree = function() {
		// console.log(this.ingredients.length);
		var flag = true;
		for (var i = 0; i < this.ingredients.length; i++) {
			// console.log("Found " + this.ingredients[i].glutenFree);
			if (this.ingredients[i].glutenFree === "No") { flag = false; }
		};
		return flag;
	}
	this.isCitrusFree = function() {
		// console.log(this.ingredients.length);
		var flag = true;
		for (var i = 0; i < this.ingredients.length; i++) {
			// console.log("Found " + this.ingredients[i].citrusFree);
			if (this.ingredients[i].citrusFree === "No") { flag = false; }
		};
		return flag;
	}
	this.create = function(){

		return $('<div class="plate">').text(name);
	}

}



var Order = function(plates) {
	this.plates = plates;
}

 


var Menu = function(plates) {
	this.plates = plates;
	this.toString = function() {
		return plates;
	}
	this.create = function(){
		
		var newDiv = $('<div class="menu"></div>')

		for (var i = 0; i < plates.length; i++) {
		 plates[i];

		newDiv.append('<div class="plate">' + plates[i].name + '</div>');

		console.log(plates[i].name);
		
		};

		console.log(newDiv);



		return newDiv;
	}


}

var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
	this.toString = function() {
		return name + ", " + description + ", " + menu.toString()
	}
	this.create = function(){

		return $('<div class="restuarant">').text(name);
	}


}

 


var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
	this.toString = function() {
		return dietaryPreference
	}
	this.create = function(){

		return $('<div class="customer">').text(name);
	}

}

var customer1 = new Customer('Mexican');
// console.log(customer1.toString());

var food1 = new FoodItem('pizza','1000','No','No','Yes');
var food2 = new FoodItem('beans and rice','400','Yes','Yes','Yes');
var food3 = new FoodItem('fruit salad','700','Yes','Yes','No');

var drink1 = new Drink('Screwdriver','Good drink','$12', [new FoodItem('orange juice', '100', 'Yes', 'No', 'No'), new FoodItem('vokda', '50')]);

var plate1 = new Plate('Poopoo platter','Platter o\'poo','free!',[new FoodItem('Poo', '100', 'Yes', 'No', 'No'), new FoodItem('Poo sauce')]);
var plate2 = new Plate('Combo platter','Surf and turf','Not free!',[new FoodItem('Steak', '500', 'No', 'Yes', 'Yes'), new FoodItem('Lobster','800','No','Yes','Yes')]);

var burrito_plate = new Plate('Burrito Plate','Burrito stuff','$8.00',[new FoodItem('Chicken', '300', 'No', 'No', 'Yes'), new FoodItem('Black beans', '500', 'Yes', 'Yes', 'Yes')]);

var avocado = new FoodItem('Avocado', '200', 'Yes', 'Yes', 'Yes');
var chips = new FoodItem('Chips', '500', 'Yes', 'No', 'Yes');
var guac_plate = new Plate('Guac plate','300','$4',[avocado, chips]);

var tequila = new FoodItem('Tequila','200','Yes','Yes','Yes');
var marg = new Plate('Marg','600','$13',[tequila]);

var order1 = new Order([plate1, plate2]);

var menu1 = new Menu([plate1, plate2]);
var plate_menu = new Menu([burrito_plate,guac_plate,marg]);

var restaurant1 = new Restaurant('Bill\'s','Dive', menu1);
var restaurant2 = new Restaurant('Tequila Tavern', 'Expensive margs', plate_menu);

$(document).on('ready', function() {
  
  $('.container').append(restaurant2.create);

  console.log(restaurant2);



  $('.container').append(plate_menu.create());
  	console.log(plate_menu.create());


  $(document).on('click', '.plate', function (){

  		var flag = prompt("Do you want to add this to your order?");

  		if( flag === "yes") {
  			// $('.order').append($(this)[0]);
  			$(this).clone().appendTo('.order');
  		 };

  		 console.log($(this).text(price));
  });



















});