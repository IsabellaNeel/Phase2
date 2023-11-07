class ShoppingListItem {
    constructor(foodName, notes){
        this.foodName = foodName;
        this.notes = notes;
    }
}

class FoodItem {
    constructor(id, name, category, quantity, expiration, allergens, calories, owner, servingSize) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      this.expiration = expiration;
      this.allergens = allergens;
      this.calories = calories;
      this.owner = owner;
      this.servingSize = servingSize;
    }
  }

class User {
    constructor(userName, foodArr, shoppingListArr) {
        this.userName = userName;
        this.foodArr = foodArr;
        this.shoppingListArr = shoppingListArr;
    }
}

let user1 = new User();
let idNum = 0;
user1.userName = "Bob";
let str = sessionStorage.getItem('foodArr');
let str2 = sessionStorage.getItem('shoppingListArr');

if(str != null){
    user1.foodArr = JSON.parse(str);
} else {
    user1.foodArr = [["Protein"], ["Dairy"], ["Vegetables"], ["Fruits"], ["Grains"], ["Drinks"], ["Meals"], ["Spices"], ["Oils"], ["Other"], ["All"]];
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
        return "Images/apple.jfif";
    } else if(string == "bananas" || string == "Bananas" || string == "banana" || string == "Banana"){
        return "Images/banana.jfif";
    } else if(string == "limes" || string == "Limes" || string == "lime" || string == "Lime"){
        return "Images/lime.jfif";
    } else if(string == "bread" || string == "Bread"){
        return "Images/bread.jpg";
    } else {
        return "Images/food.jfif"
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
                "<h3>" + user1.shoppingListArr[i].foodName + "</h3>" +
                "<p id = \"showNotes"+ i +"\"></p>" +
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
    if (element.className === "expand"){
        element.className = "expand collapse";
        if(user1.shoppingListArr[index].notes == ""){
            document.getElementById("showNotes"+index).innerHTML = "No Notes";
        } else{
            document.getElementById("showNotes"+index).innerHTML = user1.shoppingListArr[index].notes;
        }
    } else {
        element.className = "expand";
        document.getElementById("showNotes"+index).innerHTML = "";
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

function stringToNum(string){
    if (string == "Protein"){
        return 0;
    } else if (string == "Dairy"){
        return 1;
    } else if (string == "Vegetable"){
        return 2;
    }  else if (string == "Fruit"){
        return 3;
    } else if (string == "Grain"){
        return 4;
    } else if (string == "Drink"){
        return 5;
    } else if (string == "Meal"){
        return 6;
    } else if (string == "Spice"){
        return 7;
    } else if (string == "Oil"){
        return 8;
    } else if (string == "Other"){
        return 9;
    }  else if (string == "All"){
        return 10;
    }
}

function numToString(num){
    if (num == 0){
        return "Protein";
    } else if (num == 1){
        return "Dairy";
    } else if (num == 2){
        return "Vegetables";
    }  else if (num == 3){
        return "Fruits";
    } else if (num == 4){
        return "Grains";
    } else if (num == 5){
        return "Drinks";
    } else if (num == 6){
        return "Meals";
    } else if (num == 7){
        return "Spices";
    } else if (num == 8){
        return "Oils";
    } else if (num == 9){
        return "Other";
    }  else if (num == 10){
        return "All";
    }
}

function formatToAdd(){ //adds food item to foodArr after food item form has been filled out and entered
    var nameValue = document.getElementById("foodLabel").value;
    var categoryValue = document.getElementById("category").value;
    var quantityValue = document.getElementById("quantity").value;
    var expirationValue = document.getElementById("expiration").value;
    var allergensValue = document.getElementById("allergens").value;
    var caloriesValue = document.getElementById("calories").value;
    var servingSizeValue = document.getElementById("servingSize").value;

    let foodItem = {id: idNum++, name: nameValue, category: categoryValue, quantity: quantityValue, 
        expiration: expirationValue, allergens: allergensValue, calories: caloriesValue, 
        owner:user1.userName, servingSize: servingSizeValue};

    let str = sessionStorage.getItem('foodArr');
    if(str == null){
        user1.foodArr = [["Protein"], ["Dairy"], ["Vegetables"], ["Fruits"], ["Grains"], ["Drinks"], ["Meals"], ["Spices"], ["Oils"], ["Other"], ["All"]];
    } else {
        user1.foodArr = JSON.parse(str);
    }

    user1.foodArr[stringToNum(categoryValue)].push(foodItem);
    user1.foodArr[10].push(foodItem);

    let jsonArray = JSON.stringify(user1.foodArr);
    sessionStorage.setItem('foodArr', jsonArray);
    
    myForm.className = "form-popup fpshow";
    plus.className = "menuicon";
    displayAllFood();
}

function displayAllFood(){ //displays all food items from foodArr in boxes
    var results = "<table class=\"foodTable\" >";
    let num = 0;
    console.log("user1.foodArr");
    console.log(user1.foodArr);
    for(let i in user1.foodArr){
       // if(i < 10){
            if(user1.foodArr[i].length > 1){
                if(num%3 == 0){
                    results = results + "<tr><td class=\"foodBox\" onclick=\"displayCatagory(" + i + ")\"> Display " + numToString(i) +"</td>";
                } else if ((num+1)%3 == 0){
                    results = results + "<td class=\"foodBox\" onclick=\"displayCatagory(" + i + ")\"> Display " + numToString(i) +"</td></tr>";
                } else {
                    results = results + "<td class=\"foodBox\" onclick=\"displayCatagory(" + i + ")\"> Display " + numToString(i) +"</td>";
                }
                num = num + 1;
            }
       // }
    }
    if((num + 1)%3 != 0){
        "</tr></table>";
    } else {
        results = results  + "</table>";
    }
    
    if (num == 0){
        results = "<div style = \"width: 91%; margin: auto\"><p style = \"font-size: 1.2rem\">Press the <span style = \"font-weight: bold\">+</span> button on the top right to add food to your kitchen.</p></div>" + results
    }
    
    myForm.className = "form-popup";
    plus.className = "menuicon";
    flushInputs();
    document.getElementById("result").innerHTML = results;
}


function displayCatagory(i){
    results =  "<table class=\"foodTable\" >";
    let balanced = 0;
    for(let j in user1.foodArr[i]){
        if(j == 0){
            results = results + "<div class=\"categoryTitle\">"+ numToString(i) +"</div>"
        } else {
            if(balanced%3 == 0){
                results = results + "<tr><td class=\"foodBox\" onclick=\"getFoodInfo(" + i + "," + j + ")\">" + user1.foodArr[i][j].name + "</td>"; 
            } else if ((balanced+1)%3 == 0){
                results = results + "<td class=\"foodBox\" onclick=\"getFoodInfo(" + i + "," + j + ")\">" + user1.foodArr[i][j].name + "</td></tr>";
            } else {
                results = results + "<td class=\"foodBox\" onclick=\"getFoodInfo(" + i + "," + j + ")\">" + user1.foodArr[i][j].name + "</td>";
            }
            balanced = balanced + 1;
        }
    }

    if((balanced + 1)%3 != 0){
        results = results + "</tr></table>";
    } else {
        results = results + "</table>";
    }

    results = results + "<button style=\"bottom:11%; right:2%\" class=\"open-button\" onclick=\"displayAllFood()\"><p>&#8592;</p></button>";

    myForm.className = "form-popup";
    plus.className = "menuicon";
    flushInputs();
    document.getElementById("result").innerHTML = results;
}

function flushInputs(){ //new function to clear all of the input fields on the form, in order to account for the new implementation of the form. --andrew
    document.getElementById('foodLabel').value = '';
    document.getElementById('category').value = 'Other';
    document.getElementById('quantity').value = '';
    document.getElementById('expiration').value = '';
    document.getElementById('allergens').value = '';
    document.getElementById('calories').value = '';
    document.getElementById('servingSize').value = '';
}

function removeById(id){
    for(i in user1.foodArr){
        if(i != 10){
            for(j in user1.foodArr[i]){
                if(j != 0 && user1.foodArr[i][j].id == id){
                    user1.foodArr[i].splice(j, 1);
                }
            }
        }
    }
}

function removeFoodItem(i, j){ //removes food item from array and screen
    let foodId = user1.foodArr[i][j].id;
    user1.foodArr[i].splice(j, 1);
    if(i == 10){
        removeById(foodId);
    } else {
        user1.foodArr[10] = new Array();
        user1.foodArr[10].push("All");
        for(i in user1.foodArr){
            if(i != 10){
                for(j in user1.foodArr[i]){
                    if(j != 0){
                        user1.foodArr[10].push(user1.foodArr[i][j]);
                    }
                }
            }
        }
    }
    let jsonArray = JSON.stringify(user1.foodArr);
    sessionStorage.setItem('foodArr', jsonArray);
    displayAllFood();
}

function getFoodInfo(i, j){ //gets information about specified food item to display on screen
    document.getElementById("result").innerHTML = "<h1><img class=\"foodImage\" src=\"" + getImage( user1.foodArr[i][j].name) + "\" width=\"200\" class=\"center\"> Name: " + user1.foodArr[i][j].name + "<br>Quantity: " + user1.foodArr[i][j].quantity + "<br>Expiration: " +
    user1.foodArr[i][j].expiration + "<br>Allergens: " + user1.foodArr[i][j].allergens + 
    "<br>Calories: " + user1.foodArr[i][j].calories + "<br>Serving Size: " + 
    user1.foodArr[i][j].servingSize + "<br> <button class=\"remove-food-button\" onclick=\"removeFoodItem("+ i + "," + j + ")\">Delete Item</button>"
    + "<button style=\"bottom:11%; right:2%\" class=\"open-button\" onclick=\"displayCatagory("+ i +")\"><p>&#8592;</p></button><h1>";
}

/*YOUR KITCHEN FUNCTIONS END*/