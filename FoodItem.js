class FoodItem {
    constructor(name, expiration, allergens, calories, owner, servingSize) {
      this.name = name;
      this.expiration = expiration;
      this.allergens = allergens;
      this.calories = calories;
      this.owner = owner;
      this.servingSize = servingSize;
    }

    getName(){
        return this.name;
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