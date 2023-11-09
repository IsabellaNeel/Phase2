class KitchenApp {
    constuctor(userArr, foodItemArr, shoppingListArr, recipesArr){
        this.userArr = userArr;
        this.foodItemArr = foodItemArr;
        this.shoppingListArr = shoppingListArr;
        this.recipesArr = recipesArr;
    }
}


class ShoppingListItem {
    constructor(foodName, notes){
        this.foodName = foodName;
        this.notes = notes;
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
    constructor(userName, foodArr, shoppingListArr) {
        this.userName = userName;
        this.foodArr = foodArr;
        this.shoppingListArr = shoppingListArr;
    }

    addFoodItem(foodItem){
        this.foodArr.push(foodItem);
    }

    addShoppingListItem(shoppingListItem){
        this.shoppingListArr.push(shoppingListItem);
    }

    getshoppingListArr(){
        return this.foodArr;
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
let str2 = sessionStorage.getItem('shoppingListArr');

if(str != null){
    user1.foodArr = JSON.parse(str);
} else {
    user1.foodArr = new Array();
    let jsonArray = JSON.stringify(user1.foodArr);
    sessionStorage.setItem('foodArr', jsonArray);
}

if(str2 != null){
    user1.shoppingListArr = JSON.parse(str2);
} else {
    user1.shoppingListArr = new Array();
    let jsonArray = JSON.stringify(user1.shoppingListArr);
    sessionStorage.setItem('shoppingListArr', jsonArray);
}

function getImage(string){ //returns an image based on the string parameter
    if(string == "apple" || string == "Apple" || string == "apples" || string == "Apples"){
        return "apple.jfif";
    } else if(string == "bananas" || string == "Bananas" || string == "banana" || string == "Banana"){
        return "banana.jfif";
    } else if(string == "limes" || string == "Limes" || string == "lime" || string == "Lime"){
        return "lime.jfif";
    }
}

/*SHOPPING LIST FUNCTIONS START*/
function toggleShoppingForm(){
    if (myFormShopping.className === "form-popup-shopping fpsshow"){
        myFormShopping.className = "form-popup-shopping";
        plus.className = "menuicon";
    } else {
        myFormShopping.className = "form-popup-shopping fpsshow";
        plus.className = "menuicon toggled";
    }
}

function formatToAddShoppingList(){
    var nameValue = document.getElementById("foodLabelShopping").value;
    var notesValue = document.getElementById("notesLabelShopping").value;
    
    let shoppingListItem = {foodName: nameValue, notes: notesValue};

    let str2 = sessionStorage.getItem('shoppingListArr');
    if(str2 == null){
        user1.shoppingListArr = new Array();
    } else {
        user1.shoppingListArr = JSON.parse(str2);
    }

    user1.shoppingListArr.push(shoppingListItem);
    let jsonArray = JSON.stringify(user1.shoppingListArr);
    sessionStorage.setItem('shoppingListArr', jsonArray);

    myFormShopping.className = "form-popup-shopping fpsshow";
    plus.className = "menuicon";
    displayAllShoppingListItems();
}

function displayAllShoppingListItems(){
    var results = "<table class = \"carttable\" >";
   
    let num = 0;
    for(let i in user1.shoppingListArr){
        results = results + 
        "<tr class = \"cartitem\">" +
            "<td style = \"width: 85%\">" +
                "<h3 style = \"text-decoration: none\" id = \"itemLabel" + i + "\">" + user1.shoppingListArr[i].foodName + "</h3>" +
                "<p id = \"showNotes"+ i +"\"></p>" +
                "<p style = \"color: #2e8cca\" id = \"strikeLink" + i + "\" onclick = \"toggleStrikethough(" + i + ")\"></p>" +
            "</td>" +

            "<td style = \"width: 8%; text-align: center\" onclick = \"toggleExpand(this.firstElementChild," + i +")\">" +
                "<h3 class = \"expand\">&#8964;</h3>" + 
            "</td>" +

            "<td style = \"width: 7%; text-align: center\" onclick = \"deleteItem(this.parentElement," + i + ")\">" +
                "<h3>x</h3>" +
            "</td>" +
        "</tr>";
        
        num = num + 1;
    }
        results = results + "</table>";
    
    if (num == 0){
        results = "<div style = \"width: 91%; margin: auto\"><p style = \"font-size: 1.2rem\">Press the <span style = \"font-weight: bold\">+</span> button on the top right to add to your shopping list.</p></div>" + results
    }
    
    myFormShopping.className = "form-popup-shopping";
    plus.className = "menuicon";
    flushInputsShoppingList();
    document.getElementById("resultShoppingList").innerHTML = results;
}

function flushInputsShoppingList(){
    /* new function to clear all of the input fields on the form, in order to account for the new implementation of the form. --andrew */
    document.getElementById('foodLabelShopping').value = '';
    document.getElementById('notesLabelShopping').value = '';
}

function deleteItem(input, index) {
    var element = input;
    element.remove();
    user1.shoppingListArr.splice(index, 1);
    let jsonArray = JSON.stringify(user1.shoppingListArr);
    sessionStorage.setItem('shoppingListArr', jsonArray);
    displayAllShoppingListItems();
}
  
  function toggleExpand(input, index) {
    var element = input;
    var mark = "";
    if (document.getElementById("itemLabel" + index).style.textDecoration === "none"){
        mark = "Mark as purchased and add to kitchen";
    } else {
        mark = "Undo"
    }
    if (element.className === "expand"){
        element.className = "expand collapse";
        if(user1.shoppingListArr[index].notes == ""){
            document.getElementById("showNotes"+index).innerHTML = "No Notes";
        } else{
            document.getElementById("showNotes"+index).innerHTML = user1.shoppingListArr[index].notes;
        }
        document.getElementById("strikeLink" + index).innerHTML = mark;
    } else {
        element.className = "expand";
        document.getElementById("showNotes"+index).innerHTML = "";
        document.getElementById("strikeLink" + index).innerHTML = "";
    }
  }

function toggleStrikethough(index){
    if (document.getElementById("itemLabel" + index).style.textDecoration === "none"){
        document.getElementById("itemLabel" + index).style.textDecoration = "line-through"
        document.getElementById("strikeLink" + index).innerHTML = "Undo";
    } else {
        document.getElementById("itemLabel" + index).style.textDecoration = "none"
        document.getElementById("strikeLink" + index).innerHTML = "Mark as purchased and add to kitchen";
    }
    
}
/*SHOPPING LIST FUNCTIONS END*/

/*YOUR KITCHEN FUNCTIONS START*/
function toggleForm() { // opens/closes the form to enter food items to your kitchen page
    if (myForm.className === "form-popup fpshow"){
        myForm.className = "form-popup";
        plus.className = "menuicon";
    } else {
        myForm.className = "form-popup fpshow";
        plus.className = "menuicon toggled";
    } 
}

function formatToAdd(){ //adds food item to foodArr after food item form has been filled out and entered
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

    
    myForm.className = "form-popup fpshow";
    plus.className = "menuicon";
    displayAllFood();
}

function displayAllFood(){ //displays all food items from foodArr in boxes
    var results = "<table class=\"foodTable\" >";
    let balanced = 0;
    let num = 0;
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
        num = num + 1;
    }
    
    if((balanced + 1)%3 != 0){
        results = results + "</td></table>";
    } else {
        results = results + "</table>";
    }
    
    if (num == 0){
        results = "<div style = \"width: 91%; margin: auto\"><p style = \"font-size: 1.2rem\">Press the <span style = \"font-weight: bold\">+</span> button on the top right to add food to your kitchen.</p></div>" + results
    }
    
    myForm.className = "form-popup";
    plus.className = "menuicon";
    flushInputs();
    document.getElementById("result").innerHTML = results;
}

function flushInputs(){ //new function to clear all of the input fields on the form, in order to account for the new implementation of the form. --andrew
    document.getElementById('foodLabel').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('expiration').value = '';
    document.getElementById('allergens').value = '';
    document.getElementById('calories').value = '';
    document.getElementById('servingSize').value = '';
}

function removeFoodItem(index){ //removes food item from array and screen 
    user1.foodArr.splice(index, 1);
    let jsonArray = JSON.stringify(user1.foodArr);
    sessionStorage.setItem('foodArr', jsonArray);
    displayAllFood();
}

function getFoodInfo(index){ //gets information about specified food item to display on screen
    document.getElementById("result").innerHTML = "<h1><img class=\"foodImage\" src=\"" + getImage( user1.foodArr[index].name) + "\" width=\"200\" class=\"center\"> Name: " + user1.foodArr[index].name + "<br>Quantity: " + user1.foodArr[index].quantity + "<br>Expiration: " +
    user1.foodArr[index].expiration + "<br>Allergens: " + user1.foodArr[index].allergens + 
    "<br>Calories: " + user1.foodArr[index].calories + "<br>Serving Size: " + 
    user1.foodArr[index].servingSize + "<br> <button class=\"remove-food-button\" onclick=\"removeFoodItem("+ index + ")\">Delete Item</button>"
    + "<button style=\"bottom:11%; right:2%\" class=\"open-button\" onclick=\"displayAllFood()\"><p>&#8592;</p></button><h1>";
}

/*YOUR KITCHEN FUNCTIONS END*/