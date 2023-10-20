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

let user1 = new User();
user1.userName = "Bob";
user1.foodArr = new Array();
//let user1 = {userName:"Bob", foodArr: new Array()}

function getFoodInfo(index){
    document.getElementById("result").innerHTML = "Name: " + user1.foodArr[index].name + "<br>Quantity: " + user1.foodArr[index].quantity + "<br>Expiration: " +
    user1.foodArr[index].expiration + "<br>Allergens: " + user1.foodArr[index].allergens + 
    "<br>Calories: " + user1.foodArr[index].calories + "<br>Serving Size: " + 
    user1.foodArr[index].servingSize + "<br> <button style=\"bottom:11%; right:2%\" class=\"open-button\" onclick=\"displayAllFood()\">Return</button>";
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
    
function closeForm() {
    document.getElementById("myForm").style.display = "none";
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

    user1.foodArr.push(foodItem);

    displayAllFood();

    closeForm();
}

function displayAllFood(){
    var results = "<table style=\" border-spacing:20px\">";
    let balanced = 0;
    for(let i in user1.foodArr){
        if(i%3 == 0){
            results = results + "<tr><td  onclick=\"getFoodInfo(" + i + ")\" style=\"border: 3px solid #5e5858; height:230px; width:289.2px; padding: 5%\">" + user1.foodArr[i].name + "</td>"; 
        } else if ((i+1)%3 == 0){
            results = results + "<td onclick=\"getFoodInfo(" + i + ")\" style=\"border: 3px solid #5e5858; height:230px; width:289.2px; padding: 5%\">" + user1.foodArr[i].name + "</td></tr>";
        } else {
            results = results + "<td onclick=\"getFoodInfo(" + i + ")\" style=\"border: 3px solid #5e5858; height:230px; width:289.2px; padding: 5%\">" + user1.foodArr[i].name + "</td>";
        }
        balanced = i;
    }

    if((balanced + 1)%3 != 0){
        results = results + "</td></table> <button style=\"bottom:11%; right:2%\" class=\"open-button\" onclick=\"openForm()\">Add Food</button>";
    } else {
        results = results + "</table> <button style=\"bottom:11%; right:2%\" class=\"open-button\" onclick=\"openForm()\">Add Food</button>";
    }
    
    document.getElementById("result").innerHTML = results;
}

/*results = results + "<td><br>Food Item " + i + "<br>Name: " + user1.foodArr[i].name + "<br>Expiration: " +
        user1.foodArr[i].expiration + "<br>Allergens: " + user1.foodArr[i].allergens + 
        "<br>Calories: " + user1.foodArr[0].calories + "<br>Serving Size: " + 
        user1.foodArr[i].servingSize + "<br></td>";*/