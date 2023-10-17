include('FoodItem.js');
class User {
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