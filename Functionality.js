class KitchenApp {
    constuctor(userArr, foodItemArr, shoppingListArr, recipesArr){
        this.userArr = userArr;
        this.foodItemArr = foodItemArr;
        this.shoppingListArr = shoppingListArr;
        this.recipesArr = recipesArr;
    }
}

class ShoppingList {
    constuctor(foodArr){
        this.foodArr = foodArr;
    }

    addListItem(){

    }

    removeListItem(){

    }

}

class Recipee {
    constructor(){

    }
}

class FoodItem {
    constructor(name, quantity, expiration, allergens, calories, owner, servingSize) {
      this.name = name;
      this.quantity = quantity;
      this.expiration = expiration;
      this.allergens = allergens;
      this.calories = calories;
      this.owner = owner;
      this.servingSize = servingSize;
    }

    getName(){
        return this.name;
    }
    getQuantity(){
        return this.quantity;
    }

    getExpiration(){
        return this.expiration;
    }

    getAllergens(){
        return this.allergens;
    }

    getCalories(){
        return this.calories;
    }

    getOwner(){
        return this.owner;
    }

    getServingSize(){
        return this.servingSize;
    }

  }

class User {
    static foodArr;
    constructor(userName, foodArr) {
        this.userName = userName;
        this.foodArr = foodArr;
    }

    addFoodItem(foodItem){
        this.foodArr.push(foodItem);
    }

    getFoodArr(){
        return this.foodArr;
    }

    getUserName(){
        return this.userName;
    }
}

let myKitchen = new KitchenApp();
let user1 = new User();
user1.userName = "Bob";
let str = sessionStorage.getItem('foodArr');

if(str != null){
    user1.foodArr = JSON.parse(str);
} else {
    user1.foodArr = new Array();
    let jsonArray = JSON.stringify(user1.foodArr);
    sessionStorage.setItem('foodArr', jsonArray);
}

function removeFoodItem(index){
    user1.foodArr.splice(index, 1);
    let jsonArray = JSON.stringify(user1.foodArr);
    sessionStorage.setItem('foodArr', jsonArray);
    displayAllFood();
}

function getFoodInfo(index){
    document.getElementById("result").innerHTML = "<h1>Name: " + user1.foodArr[index].name + "<br>Quantity: " + user1.foodArr[index].quantity + "<br>Expiration: " +
    user1.foodArr[index].expiration + "<br>Allergens: " + user1.foodArr[index].allergens + 
    "<br>Calories: " + user1.foodArr[index].calories + "<br>Serving Size: " + 
    user1.foodArr[index].servingSize + "<br> <button class=\"remove-food-button\" onclick=\"removeFoodItem("+ index + ")\">Delete Item</button>"
    + "<button style=\"bottom:11%; right:2%\" class=\"open-button\" onclick=\"displayAllFood()\"><p>&#8592;</p></button><h1>";
}

function openForm() {
    /* i've changed the form implementation so that this code now starts in the html file to begin with. this is to allow for a slide in/out animation --andrew
    var results = "<div class=\"form-popup\" id=\"myForm\">";
    results = results + "<form action=\"/action_page.php\" class=\"form-container\">";
    results = results + "<h2 style=\"padding:5%\">Add Food Entry to Your Kitchen</h2>";
    results = results + " <label for=\"foodLabel\"><b>Food Label</Label></b></label>";
    results = results + "<input type=\"text\" placeholder=\"Enter Food Label\" name=\"foodLabel\" id=\"foodLabel\" required>";
    results = results + "<label for=\"quantity\"><b>Quantity</Label></b></label>";
    results = results + "<input type=\"number\" placeholder=\"Enter Quantity\" name=\"quantity\" id=\"quantity\">";
    results = results + "<br><br>";
    results = results + "<label for=\"expiration\"><b>Expiration Date</b></label>";
    results = results + "<input type=\"text\" placeholder=\"Enter Expiration Date\" name=\"expiration\" id=\"expiration\">";
    results = results + "<label for=\"allergens\"><b></Label>Allergens</b></label>";
    results = results + "<input type=\"text\" placeholder=\"Enter Allergens\" name=\"allergens\" id=\"allergens\">";
    results = results + "<label for=\"calories\"><b></Label>Calories</b></label>";
    results = results + "<input type=\"number\" placeholder=\"Enter Calories\" name=\"calories\" id=\"calories\"> ";
    results = results + "<br><br>";
    results = results + "<label for=\"servingSize\"><b></Label>Serving Size</b></label>";
    results = results + "<input type=\"text\" placeholder=\"Enter Serving Size\" name=\"servingSize\" id=\"servingSize\">";
    results = results + "<button type=\"button\" class=\"btn\" onclick=\"formatToAdd()\">Enter</button>";
    results = results + "<button type=\"button\" class=\"btn cancel\" onclick=\"displayAllFood()()\">Cancel</button>";
    results = results + " </form>";
    results = results + "</div>";
    results = results + "<button style=\"bottom:11%; right:2%\" class=\"open-button\" onclick=\"openForm()\"><p>+</p></button>";
    document.getElementById("result").innerHTML = results;
    */
    
    myForm.className = "form-popup fpshow";
    plus.className = "menuicon toggled";
}

function formatToAdd(){
    var nameValue = document.getElementById("foodLabel").value;
    var quantityValue = document.getElementById("quantity").value;
    var expirationValue = document.getElementById("expiration").value;
    var allergensValue = document.getElementById("allergens").value;
    var caloriesValue = document.getElementById("calories").value;
    var servingSizeValue = document.getElementById("servingSize").value;

    let foodItem = {name: nameValue, quantity: quantityValue, expiration: expirationValue, 
        allergens: allergensValue, calories: caloriesValue, 
        owner:user1.userName, servingSize: servingSizeValue};

    let str = sessionStorage.getItem('foodArr');
    if(str == null){
        user1.foodArr = new Array();
    } else {
        user1.foodArr = JSON.parse(str);
    }

    user1.foodArr.push(foodItem);
    let jsonArray = JSON.stringify(user1.foodArr);
    sessionStorage.setItem('foodArr', jsonArray);

    
    displayAllFood();
    myForm.className = "form-popup fpshow";
    plus.className = "menuicon";
}

function displayAllFood(){
    var results = "<table class=\"foodTable\" >";
    let balanced = 0;
    for(let i in user1.foodArr){
        if(i%3 == 0){
            results = results + "<tr><td class=\"foodBox\" onclick=\"getFoodInfo(" + i + ")\">" + user1.foodArr[i].name + "</td>"; 
            console.log("user1.foodArr[i]");
            console.log(user1.foodArr[i]);
        } else if ((i+1)%3 == 0){
            results = results + "<td class=\"foodBox\" onclick=\"getFoodInfo(" + i + ")\">" + user1.foodArr[i].name + "</td></tr>";
        } else {
            results = results + "<td class=\"foodBox\" onclick=\"getFoodInfo(" + i + ")\">" + user1.foodArr[i].name + "</td>";
        }
        balanced = i;
    }

    if((balanced + 1)%3 != 0){
        results = results + "</td></table>";
    } else {
        results = results + "</table>";
    }
    
    myForm.className = "form-popup";
    plus.className = "menuicon";
    flushInputs();
    document.getElementById("result").innerHTML = results;
}

function flushInputs(){
    /* new function to clear all of the input fields on the form, in order to account for the new implementation of the form. --andrew */
    document.getElementById('foodLabel').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('expiration').value = '';
    document.getElementById('allergens').value = '';
    document.getElementById('calories').value = '';
    document.getElementById('servingSize').value = '';
}