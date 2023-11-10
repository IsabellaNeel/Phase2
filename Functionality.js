class ShoppingListItem {
    constructor(foodName, notes, striked, id){
        this.foodName = foodName;
        this.notes = notes;
        this.striked = striked;
        this.id = id;
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
    static foodArr;
    constructor(userName, foodArr, shoppingListArr, recipesArr, idNum) {
        this.userName = userName;
        this.foodArr = foodArr;
        this.shoppingListArr = shoppingListArr;
        this.recipesArr=recipesArr;
        this.idNum = idNum
    }

}

let user1 = new User();
user1.userName = "Bob";
let str = sessionStorage.getItem('foodArr');
let str2 = sessionStorage.getItem('shoppingListArr');
let str3 = sessionStorage.getItem('recipesArr');
let str4 = sessionStorage.getItem('idNum');

if(str4 != null){
    user1.idNum = JSON.parse(str4);
} else {
    user1.idNum = 0;
    let json = JSON.stringify(user1.idNum);
    sessionStorage.setItem('idNum', json);
}


if(str != null){
    user1.foodArr = JSON.parse(str);
} else {
    user1.foodArr = [["Protein"], ["Dairy"], ["Vegetables"], ["Fruits"], ["Carbs"], ["Drinks"], ["Meals"], ["Spices"], ["Oils"], ["Other"], ["All"]];
    //Hard code food items onto the list
    let foodItem1 = {id:  user1.idNum++, name: "Chicken Breasts", category: "Protein", quantity: "5", 
        expiration: "11/20/2023", allergens: "None", calories: "284", 
        owner:user1.userName, servingSize: "1 Chicken Breast"};
    user1.foodArr[0].push(foodItem1);
    user1.foodArr[10].push(foodItem1);

    let foodItem2 = {id:  user1.idNum++, name: "Oat Milk", category: "Dairy", quantity: "1", 
    expiration: "12/03/2023", allergens: "None", calories: "130", 
    owner:user1.userName, servingSize: "1 Cup"};
    user1.foodArr[1].push(foodItem2);
    user1.foodArr[10].push(foodItem2);

    let foodItem3 = {id:  user1.idNum++, name: "Half and half", category: "Dairy", quantity: "1", 
    expiration: "11/29/2023", allergens: "Lactose", calories: "100", 
    owner:user1.userName, servingSize: "170g"};
    user1.foodArr[1].push(foodItem3);
    user1.foodArr[10].push(foodItem3);

    let foodItem4 = {id:  user1.idNum++, name: "Greek Yogurt", category: "Dairy", quantity: "1", 
    expiration: "12/07/2023", allergens: "Lactose", calories: "130", 
    owner:user1.userName, servingSize: "1 Cup"};
    user1.foodArr[1].push(foodItem4);
    user1.foodArr[10].push(foodItem4);

    let foodItem5 = {id:  user1.idNum++, name: "Broccoli", category: "Vegetable", quantity: "7", 
        expiration: "11/25/2023", allergens: "None", calories: "50", 
        owner:user1.userName, servingSize: "148g"};
    user1.foodArr[2].push(foodItem5);
    user1.foodArr[10].push(foodItem5);

    let foodItem6 = {id:  user1.idNum++, name: "Spinach Bag", category: "Vegetable", quantity: "1", 
        expiration: "11/20/2023", allergens: "None", calories: "7", 
        owner:user1.userName, servingSize: "1 Cup"};
    user1.foodArr[2].push(foodItem6);
    user1.foodArr[10].push(foodItem6);

    let foodItem7 = {id:  user1.idNum++, name: "Apples", category: "Fruit", quantity: "6", 
        expiration: "12/04/2023", allergens: "None", calories: "95", 
        owner:user1.userName, servingSize: "1 apple"};
    user1.foodArr[3].push(foodItem7);
    user1.foodArr[10].push(foodItem7);

    let foodItem8 = {id:  user1.idNum++, name: "Bananas", category: "Fruit", quantity: "3", 
        expiration: "11/10/2023", allergens: "None", calories: "105", 
        owner:user1.userName, servingSize: "1 banana"};
    user1.foodArr[3].push(foodItem8);
    user1.foodArr[10].push(foodItem8);

    let foodItem9 = {id:  user1.idNum++, name: "Limes", category: "Fruit", quantity: "3", 
        expiration: "11/10/2023", allergens: "None", calories: "105", 
        owner:user1.userName, servingSize: "1 banana"};
    user1.foodArr[3].push(foodItem9);
    user1.foodArr[10].push(foodItem9);

    let foodItem10 = {id:  user1.idNum++, name: "Bread", category: "Carb", quantity: "1", 
        expiration: "11/21/2023", allergens: "Gluten", calories: "79", 
        owner:user1.userName, servingSize: "1 Slice"};
    user1.foodArr[4].push(foodItem10);
    user1.foodArr[10].push(foodItem10);

    let foodItem11 = {id:  user1.idNum++, name: "Angle Hair Pasta", category: "Carb", quantity: "1", 
        expiration: "06/15/2024", allergens: "Gluten", calories: "211", 
        owner:user1.userName, servingSize: "2 oz"};
    user1.foodArr[4].push(foodItem11);
    user1.foodArr[10].push(foodItem11);

  let foodItem12 = {id:  user1.idNum++, name: "Grape Juice", category: "Drink", quantity: "1", 
        expiration: "01/06/2024", allergens: "None", calories: "152", 
        owner:user1.userName, servingSize: "1 cup"};
    user1.foodArr[5].push(foodItem12);
    user1.foodArr[10].push(foodItem12);

    let foodItem13 = {id:  user1.idNum++, name: "Kombuchas", category: "Drink", quantity: "3", 
        expiration: "01/01/2024", allergens: "None", calories: "30", 
        owner:user1.userName, servingSize: "8 oz"};
    user1.foodArr[5].push(foodItem13);
    user1.foodArr[10].push(foodItem13);

    let foodItem14 = {id:  user1.idNum++, name: "Lasagna", category: "Meal", quantity: "1", 
        expiration: "11/15/2023", allergens: "Gluten, Lactose", calories: "166", 
        owner:user1.userName, servingSize: "1 slice (123 oz)"};
    user1.foodArr[6].push(foodItem14);
    user1.foodArr[10].push(foodItem14);

    let foodItem15 = {id:  user1.idNum++, name: "Garlic Powder", category: "Spice", quantity: "1", 
        expiration: "07/23/2025", allergens: "None", calories: "32", 
        owner:user1.userName, servingSize: "1 tablespoon"};
    user1.foodArr[7].push(foodItem15);
    user1.foodArr[10].push(foodItem15);

    let foodItem16 = {id:  user1.idNum++, name: "Onion Powder", category: "Spice", quantity: "1", 
        expiration: "03/17/2025", allergens: "None", calories: "24", 
        owner:user1.userName, servingSize: "1 tablespoon"};
    user1.foodArr[7].push(foodItem16);
    user1.foodArr[10].push(foodItem16);

    let foodItem17 = {id:  user1.idNum++, name: "Salt", category: "Spice", quantity: "1", 
    expiration: "09/17/2027", allergens: "None", calories: "0", 
    owner:user1.userName, servingSize: "1 tablespoon"};
    user1.foodArr[7].push(foodItem17);
    user1.foodArr[10].push(foodItem17);

    let foodItem18 = {id:  user1.idNum++, name: "Pepper", category: "Spice", quantity: "1", 
    expiration: "04/08/2026", allergens: "None", calories: "17", 
    owner:user1.userName, servingSize: "1 tablespoon"};
    user1.foodArr[7].push(foodItem18);
    user1.foodArr[10].push(foodItem18);

    let foodItem19 = {id:  user1.idNum++, name: "Olive Oil", category: "Oil", quantity: "2", 
        expiration: "08/12/2025", allergens: "None", calories: "119", 
        owner:user1.userName, servingSize: "1 tablespoon"};
    user1.foodArr[8].push(foodItem19);
    user1.foodArr[10].push(foodItem19);

    let foodItem20 = {id:  user1.idNum++, name: "Avacado Oil", category: "Oil", quantity: "1", 
        expiration: "09/27/2025", allergens: "None", calories: "124", 
        owner:user1.userName, servingSize: "1 tablespoon"};
    user1.foodArr[8].push(foodItem20);
    user1.foodArr[10].push(foodItem20);

    let foodItem21 = {id:  user1.idNum++, name: "Sugar", category: "Other", quantity: "1", 
        expiration: "10/26/2028", allergens: "None", calories: "16", 
        owner:user1.userName, servingSize: "1 teaspoon"};
    user1.foodArr[9].push(foodItem21);
    user1.foodArr[10].push(foodItem21);
    console.log("user1.idNum");
    console.log(user1.idNum);
    let json = JSON.stringify(user1.idNum);
    sessionStorage.setItem('idNum', json);

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

if(str3 != null){
    user1.recipesArr = JSON.parse(str3);
} else {
    user1.recipesArr = new Array();
    let jsonArray = JSON.stringify(user1.recipesArr);
    sessionStorage.setItem('recipesArr', jsonArray);
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
    } else if(string == "broccoli" || string == "Broccoli"){
        return "Images/broccoli.jfif";
    } else if(string == "half and half" || string == "Half and Half" || string == "Half and half"){
        return "Images/half-and-half.jfif";
    } else if(string == "oat milk" || string == "Oat Milk" || string == "Oat milk"){
        return "Images/oat-milk.jfif";
    } else if(string == "yogurt" || string == "Yogurt" || string == "Greek Yogurt" || string == " greek yogurt" || string == "Greek yogurt"){
        return "Images/yogurt.jfif";
    } else if(string == "chicken breast" || string == "Chicken breast" || string == "Chicken Breast" || string == "Chicken Breasts"){
        return "Images/chicken-breast.jfif";
    } else if(string == "Spinach Bag" || string == "Spinach" || string == "spinach" || string == "spinach bag" || string == "Spinach bag"){
        return "Images/spinach.jfif";
    } else if(string == "Angle Hair Pasta" || string == "Angle hair pasta" || string == "Pasta" || string == "pasta"){
        return "Images/pasta.jfif";
    } else if(string == "Kombucha" || string == "kombucha" || string == "Kombuchas"){
        return "Images/kombucha.jfif";
    } else if(string == "Grape Juice" || string == "grape juice" || string == "Grape juice"){
        return "Images/grape-juice.jfif";
    } else if(string == "Lasagna" || string == "lasagna"){
        return "Images/lasagna.jfif";
    } else if(string == "Olive Oil" || string == "olive oil" || string == "oil" || string == "Oil"){
        return "Images/olive-oil.jfif";
    } else if(string == "Avacado Oil" || string == "avacado oil" || string == "Avacado oil"){
        return "Images/avacado-oil.jfif";
    } else if(string == "Salt" || string == "salt"){
        return "Images/salt.jfif";
    } else if(string == "Pepper" || string == "pepper"){
        return "Images/pepper.jfif";
    } else if(string == "Onion Powder" || string == "onion powder" || string == "Onion powder" ){
        return "Images/onion-powder.jfif";
    } else if(string == "Garlic Powder" || string == "garlic powder" || string == "Garlic powder" ){
        return "Images/garlic-powder.jfif";
    } else if(string == "Sugar" || string == "sugar"){
        return "Images/sugar.jfif";
    } else {
        return "Images/food.jfif"
    }
}

/*Function for fake on screen keyboard --andrew*/
function toggleOSKeyboard(){
    if (osKeyboard.className === "oskeyboard oskshow"){
        osKeyboard.className = "oskeyboard";
    } else {
        osKeyboard.className = "oskeyboard oskshow";
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
    
    let shoppingListItem = {foodName: nameValue, notes: notesValue, striked: "false", id: ""};

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
            "<td style = \"width: 85%\">";
                if(user1.shoppingListArr[i].striked == "true"){
                    results = results + "<h3 style = \"text-decoration: line-through\" id = \"itemLabel" + i + "\">" + user1.shoppingListArr[i].foodName + "</h3>";
                } else {
                    results = results + "<h3 style = \"text-decoration: none\" id = \"itemLabel" + i + "\">" + user1.shoppingListArr[i].foodName + "</h3>";
                }
                results = results + "<p id = \"showNotes"+ i +"\"></p>" +
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
        results = "<div style = \"width: 91%; margin: auto\"><p style = \"font-size: 1.2rem\">Press the <span style = \"font-weight: bold\">+</span> button on the top right to add to your shopping list. Press the <span style = \"font-weight: bold\">&#8964;</span> button on an item to view more details.</p></div>" + results
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
        user1.shoppingListArr[index].striked = "true";
        addFromShoppingList(index);
        console.log("Add: user1.shoppingListArr[index].id");
        console.log(user1.shoppingListArr[index].id);
    } else {
        document.getElementById("itemLabel" + index).style.textDecoration = "none"
        document.getElementById("strikeLink" + index).innerHTML = "Mark as purchased and add to kitchen";
        user1.shoppingListArr[index].striked = "false";
        console.log("remove: user1.shoppingListArr[index].id");
        console.log(user1.shoppingListArr[index].id);
        removeById(user1.shoppingListArr[index].id);
    }
    let jsonArray = JSON.stringify(user1.shoppingListArr);
    sessionStorage.setItem('shoppingListArr', jsonArray);
}

function addFromShoppingList(index){
    let foodItem = {id: user1.idNum++, name: user1.shoppingListArr[index].foodName, 
        category: "Other", quantity: "", expiration: "", allergens: "", calories: "", 
        owner:user1.userName, servingSize: ""};
    
    user1.shoppingListArr[index].id = foodItem.id;
    console.log("foodItem.id");
    console.log(foodItem.id);

    let str = sessionStorage.getItem('foodArr');
    if(str == null){
        user1.foodArr = [["Protein"], ["Dairy"], ["Vegetables"], ["Fruits"], ["Carbs"], ["Drinks"], ["Meals"], ["Spices"], ["Oils"], ["Other"], ["All"]];
    } else {
        user1.foodArr = JSON.parse(str);
    }

    user1.foodArr[stringToNum("Other")].push(foodItem);
    user1.foodArr[10].push(foodItem);

    let jsonArray = JSON.stringify(user1.foodArr);
    sessionStorage.setItem('foodArr', jsonArray);
    let json = JSON.stringify(user1.idNum);
    sessionStorage.setItem('idNum', json);
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
    } else if (string == "Carb"){
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
        return "Carbs";
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

    let foodItem = {id:  user1.idNum++, name: nameValue, category: categoryValue, quantity: quantityValue, 
        expiration: expirationValue, allergens: allergensValue, calories: caloriesValue, 
        owner:user1.userName, servingSize: servingSizeValue};

    let str = sessionStorage.getItem('foodArr');
    if(str == null){
        user1.foodArr = [["Protein"], ["Dairy"], ["Vegetables"], ["Fruits"], ["Carbs"], ["Drinks"], ["Meals"], ["Spices"], ["Oils"], ["Other"], ["All"]];
    } else {
        user1.foodArr = JSON.parse(str);
    }

    user1.foodArr[stringToNum(categoryValue)].push(foodItem);
    user1.foodArr[10].push(foodItem);

    let jsonArray = JSON.stringify(user1.foodArr);
    sessionStorage.setItem('foodArr', jsonArray);
    let json = JSON.stringify(user1.idNum);
    sessionStorage.setItem('idNum', json);
    
    myForm.className = "form-popup fpshow";
    plus.className = "menuicon";
    displayAllFood();
}

function displayAllFood(){ //displays all food items from foodArr in boxes
    var results = "<div class=\"kitchen-instructions\">Select a category to view.</div><table class=\"foodTable\">";
    let num = 0;
    console.log("user1.foodArr");
    console.log(user1.foodArr);
    for(let i in user1.foodArr){
       // if(i < 10){
            if(user1.foodArr[i].length > 1){
                if(num%3 == 0){
                    results = results + "<tr><td class=\"foodBox\" onclick=\"displayCategory(" + i + ")\" >" + numToString(i) +"</td>";
                } else if ((num+1)%3 == 0){
                    results = results + "<td class=\"foodBox\" onclick=\"displayCategory(" + i + ")\" >" + numToString(i) +"</td></tr>";
                } else {
                    results = results + "<td class=\"foodBox\" onclick=\"displayCategory(" + i + ")\" >" + numToString(i) +"</td>";
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
        results = "<div style = \"width: 91%; margin: auto\"><p style = \"font-size: 1.2rem\">Press the <span style = \"font-weight: bold\">+</span> button on the top right to add food to your kitchen.</p></div>"
    }
    
    myForm.className = "form-popup";
    plus.className = "menuicon";
    flushInputs();
    document.getElementById("result").innerHTML = results;
}

function pickRandColor(){
    // pick random color out of selected colors to be the food box outline color. currently unused --andrew
    var num = 0;
    num = Math.floor(Math.random() * 8);
    var output = "#242a2d"
    
    switch(num){
        case 0:
            output = "#242a2d"; // dark grey
            break;
        case 1:
            output = "#6c8693"; // mid grey
            break;
        case 2:
            output = "#c0392b"; // red
            break;
        case 3:
            output = "#e67e22"; // orange
            break;
        case 4:
            output = "#16a085"; // teal
            break;
        case 5:
            output = "#27ae60"; // green
            break;
        case 6:
            output = "#2e8cca"; // blue
            break;
        case 7:
            output = "#1f628e"; // dark blue
            break;
        default:
            output = "#242a2d"; // keep as dark grey in case of failure
            break;
    }
    return output;
}

function displayCategory(i){
    var results = "<table class = \"carttable\" >";
   
    let num = 0;
    for(let j in user1.foodArr[i]){
        if(j == 0){
            results = results + "<div class=\"categoryTitle\">"+ numToString(i) +"</div>"
        } else {
            results = results + 
            "<tr class = \"cartitem\">" +
                "<td style = \"width: 92.5%\" onclick = \"getFoodInfo(" + i + "," + j + ")\">" +
                    "<h3>" + user1.foodArr[i][j].quantity + " " + user1.foodArr[i][j].name + "</h3>" +
                "</td>" +

                "<td style = \"width: 7.5%; text-align: center\" onclick = \"removeFoodItem("+ i + "," + j + ")\">" +
                    "<h3>x</h3>" +
                "</td>" +
            "</tr>";
            num = num + 1;
        }
    }
        results = results + "</table>";
    
    if (num == 0){
        results = "<div style = \"width: 91%; margin: auto\"><p style = \"font-size: 1.2rem\">Press the <span style = \"font-weight: bold\">+</span> button on the top right to add to your Kitchen Inventory.</p></div>" + results
    }
    results = results + "<button style=\"bottom:11%; right:2%\" class=\"open-button\" onclick=\"displayAllFood()\"><p>&#8592;</p></button>";

    myForm.className = "form-popup";
    plus.className = "menuicon";
    flushInputs();
    document.getElementById("result").innerHTML = results;
}


function displayCategoryOldWay(i){ //not being used anymore
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
        for(j in user1.foodArr[i]){
            if(j != 0 && user1.foodArr[i][j].id == id){
                user1.foodArr[i].splice(j, 1);
            }
        }
    }
    let jsonArray = JSON.stringify(user1.foodArr);
    sessionStorage.setItem('foodArr', jsonArray);
}

function removeFoodItem(i, j){ //removes food item from array and screen
    let foodId = user1.foodArr[i][j].id;
    user1.foodArr[i].splice(j, 1);
    removeById(foodId);
    let jsonArray = JSON.stringify(user1.foodArr);
    sessionStorage.setItem('foodArr', jsonArray);
    if(user1.foodArr[i].length == 1){
        displayAllFood();
    } else {
        displayCategory(i);
    }
}

function getFoodInfo(i, j){ //gets information about specified food item to display on screen
    document.getElementById("result").innerHTML = "<h1><img class=\"foodImage\" src=\"" +
    getImage( user1.foodArr[i][j].name) + "\" width=\"200\" class=\"center\"> Name: " +
    user1.foodArr[i][j].name + "<br>Quantity: " + user1.foodArr[i][j].quantity + "<br>Expiration: " +
    user1.foodArr[i][j].expiration + "<br>Allergens: " + user1.foodArr[i][j].allergens + 
    "<br>Calories: " + user1.foodArr[i][j].calories + "<br>Serving Size: " + 
    user1.foodArr[i][j].servingSize  + "<br>Food Owner: " + user1.foodArr[i][j].owner + 
    "<br> <button class=\"remove-food-button\" onclick=\"removeFoodItem("+ i + "," + j +
     ")\">Delete Item</button> <button type=\"button\" class=\"edit-food-button\" onclick=\"notYetImplemented("+ i +"," + j
     + ")\">Edit Item</button>" +
    "<button style=\"bottom:11%; right:2%\" class=\"open-button\" onclick=\"displayCategory("+ i 
    +")\"><p>&#8592;</p></button><h1>";
}

function notYetImplemented(i, j){
    document.getElementById("result").innerHTML = "<h1>Sorry! This Feature is not yet implemented" +
    "<button style=\"bottom:11%; right:2%\" class=\"open-button\" onclick=\"getFoodInfo("+ i +"," + j
    +")\"><p>&#8592;</p></button></h1>";
}

/*YOUR KITCHEN FUNCTIONS END*/

/*RECIPE FUNCTIONS START*/

function deleteRecipe(input, index) {
    var element = input;
    element.remove();
    user1.recipesArr.splice(index, 1);
    let jsonArray = JSON.stringify(user1.recipesArr);
    sessionStorage.setItem('recipesArr', jsonArray);
    displayAllRecipes();
}

function displayAllRecipes() {
    var results = "<table class = \"carttable\" >";
   
    let num = 0;
    for(let i in user1.recipesArr){
        results = results + 
        "<tr class = \"cartitem\">" +
            "<td style = \"width: 92.5%\" onclick = \"displayRecipeItem(" + i + ")\">" +
                "<h3>" + user1.recipesArr[i].name + "</h3>" +
            "</td>" +

            "<td style = \"width: 7.5%; text-align: center\" onclick = \"deleteRecipe(this.parentElement," + i + ")\">" +
                "<h3>x</h3>" +
            "</td>" +
        "</tr>";
        console.log("user1.recipesArr[i]");
        console.log(user1.recipesArr[i]);
        num = num + 1;
    }
        results = results + "</table>";
    
    if (num == 0){
        results = "<div style = \"width: 91%; margin: auto\"><p style = \"font-size: 1.2rem\">Press the <span style = \"font-weight: bold\">+</span> button on the top right to add to your recipe list. Select a recipe to view it.</p></div>" + results
    }
    popup.className="form-popup";
    plus.className = "menuicon";
    flushInputRecipeList();
    document.getElementById("resultRecipeList").innerHTML = results;
    document.getElementById("recipeContainer").style.width = "100%";
}


function flushInputRecipeList() {
    document.getElementById('recipeName').value = '';
    document.getElementById('recipeIngredients').value = '';
    document.getElementById('recipeInstructions').value = '';
}
function addRecipes(){
    var nameValue=document.getElementById("recipeName").value;
    var ingredientValue=document.getElementById("recipeIngredients").value;
    var instructionsValue=document.getElementById("recipeInstructions").value;

    let recipeItem = {name: nameValue, ingredients: ingredientValue, 
        instructions: instructionsValue, owner: user1.username};
    

    let str3=sessionStorage.getItem('recipesArr');
    if (str3 == null) {
        user1.recipesArr = new Array();
    } else {
        user1.recipesArr = JSON.parse(str3);
    }

    user1.recipesArr.push(recipeItem);
    let jsonArray = JSON.stringify(user1.recipesArr);
    sessionStorage.setItem('recipesArr', jsonArray);
    
    popup.className = "form-popup";
    displayAllRecipes();

}


function displayRecipeItem(index) {
    strName = "<div><h3 style=\"text-align:center;margin-top: 0px; margin-bottom: 10px;font-size:35px\">" + user1.recipesArr[index].name + "</h3></div>"

    inputIngredient = user1.recipesArr[index].ingredients;
    ingredientBreak = inputIngredient.replace(/\n/g, '<p>');
    strIngredients = "<div><h3 style=\"margin-top: 0px; margin-bottom: 2px;font-size:25px\">Ingredients<h3></div>" 
    + "<div style=\"height:150px \" class=\"scrollable-area\">" + ingredientBreak + "</div>";

    inputInstructions = user1.recipesArr[index].instructions;
    instructionBreak = inputInstructions.replace(/\n/g, '<p>');
    strInstructions = "<div><h3 style=\"margin-top: 0px; margin-bottom: 2px;font-size:25px\">Instructions</h3></div>" 
    + "<div style=\"height:350px \" class=\"scrollable-area\">" + instructionBreak + "</div>";


    strButtonReturn = "<button onclick=displayAllRecipes() style=\"bottom:11%; right:2%\" class=\"open-button\"><p>&#8592;</p></button>";
    strButtonDelete = "<p style = \"text-align: center\" > <button onclick=deleteRecipe(this.parentElement," + index + ") class=\"remove-food-button\">Delete Recipe</button></p>";

    document.getElementById("recipeContainer").style.width = "90%";
    document.getElementById("resultRecipeList").innerHTML = strName + strIngredients + strInstructions + strButtonReturn + strButtonDelete;
}


/*RECIPE FUNCTIONS END*/

/*PROFILE PAGE FUNCTIONS START*/
function close_window() {
    if (confirm("Clear data?")) {
        clear_info("allergens")
        clear_info("name");
        clear_info("preferences");
        clear_info("skill");
        clear_info("notes")
        sessionStorage.clear();
    }
}

function togglePopupNetwork() {
    if (popupNetwork.className === "popup pshow" || overlayNetwork.className === "overlay pshow") {
        popupNetwork.className = "popup";
        overlayNetwork.className = "overlay";
    } else {
        popupNetwork.className = "popup pshow";
        overlayNetwork.className = "overlay oshow";
    }
};

function toggleProfileForm() { // opens/closes the form to enter food items to your kitchen page
    if (myFormProfile.className === "form-popup fpshow"){
        myFormProfile.className = "form-popup";
    } else {
        myFormProfile.className = "form-popup fpshow";
    } 
}

function update_profile_info(){
    var getProfileName = document.getElementById("nameInput");
    var getProfileAllergens = document.getElementById("allergensInput");
    var getProfilePreferences = document.getElementById("preferencesInput");
    var getProfileSkill = document.getElementById("skillInput");
    var getProfileNotes = document.getElementById("notesInput");

    if(getProfileName.value){
        sessionStorage.setItem("name", getProfileName.value);
    } else{
        clear_info("name");
    }

    if(getProfileAllergens.value){
        sessionStorage.setItem("allergens", getProfileAllergens.value);
    } else{
        clear_info("allergens");
    }

    if(getProfilePreferences.value){
        sessionStorage.setItem("preferences", getProfilePreferences.value);
    } else{
        clear_info("preferences");
    }

    if(getProfileSkill.value){
        sessionStorage.setItem("skill", getProfileSkill.value);
    } else{
        clear_info("skill");
    }

    if(getProfileNotes.value){
        sessionStorage.setItem("notes", getProfileNotes.value);
    } else{
        clear_info("notes");
    }

    fill_info()
}

function fill_info(){
    myFormProfile.className = "form-popup-profile";
    if(sessionStorage.getItem("name")){
        document.getElementById("name").innerHTML = "Hello " + sessionStorage.getItem("name") + "!";
        document.getElementById("nameInput").value = sessionStorage.getItem("name");
    }
    if(sessionStorage.getItem("allergens")){
        document.getElementById("allergens").innerHTML = sessionStorage.getItem("allergens");
        document.getElementById("allergensInput").value = sessionStorage.getItem("allergens");
    }
    if(sessionStorage.getItem("preferences")){
        document.getElementById("preferences").innerHTML = sessionStorage.getItem("preferences");
        document.getElementById("preferencesInput").value = sessionStorage.getItem("preferences");
    }
    if(sessionStorage.getItem("skill")){
        document.getElementById("skill").innerHTML = sessionStorage.getItem("skill");
        document.getElementById("skillInput").value = sessionStorage.getItem("skill");
    }
    if(sessionStorage.getItem("notes")){
        document.getElementById("notes").innerHTML = sessionStorage.getItem("notes");
        document.getElementById("notesInput").value = sessionStorage.getItem("notes");
    }
}

function clear_info(input){
    if(sessionStorage.getItem(input)){
        document.getElementById(input).innerHTML = "";
        if(input=="name"){
            document.getElementById("name").innerHTML = "Hello!<br>Please update your Profile information in the top right!";
        }
        sessionStorage.removeItem(input);
    }
}
/*PROFILE PAGE FUNCTIONS END*/
