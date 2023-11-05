class MenuFunctionality{

}

function toggleMenu() {
    if (menu.className === "menu show") {
        menu.className = "menu hide";
        hamburger.className = "menuicon";
    } else {
        menu.className = "menu show";
        hamburger.className = "menuicon toggled";
    }
};

function togglePopup() {
    if (popup.className === "popup pshow" || overlay.className === "overlay pshow") {
        popup.className = "popup";
        overlay.className = "overlay";
        plus.className = "menuicon";
    } else {
        popup.className = "popup pshow";
        overlay.className = "overlay oshow";
        plus.className = "menuicon toggled";
        
        // close all others
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
    }
};

function togglePopupPersons() {
    if (popupPersons.className === "popup pshow" || overlayPersons.className === "overlay pshow") {
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
    } else {
        popupPersons.className = "popup pshow";
        overlayPersons.className = "overlay oshow";
        
        // close all others
        plus.className = "menuicon";
        popup.className = "popup";
        overlay.className = "overlay";
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
    }
};

function togglePopupMeals() {
    if (popupMeals.className === "popup pshow" || overlayMeals.className === "overlay pshow") {
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
    } else {
        popupMeals.className = "popup pshow";
        overlayMeals.className = "overlay oshow";
        
        // close all others
        plus.className = "menuicon";
        popup.className = "popup";
        overlay.className = "overlay";
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
    }
};

function togglePopupFlavors() {
    if (popupFlavors.className === "popup pshow" || overlayFlavors.className === "overlay pshow") {
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
    } else {
        popupFlavors.className = "popup pshow";
        overlayFlavors.className = "overlay oshow";
        
        // close all others
        plus.className = "menuicon";
        popup.className = "popup";
        overlay.className = "overlay";
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
    }
};