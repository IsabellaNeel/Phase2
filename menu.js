var toggleMenu = function () {
    if (menu.className === "menu show") {
        menu.className = "menu hide";
        hamburger.className = "menuicon";

        // close all others
        plus.className = "menuicon";
        popup.className = "popup";
        overlay.className = "overlay";
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";

    } else {
        menu.className = "menu show";
        hamburger.className = "menuicon toggled";

        // close all others
        plus.className = "menuicon";
        popup.className = "popup";
        overlay.className = "overlay";
    }

};

var togglePopup = function () {
    if (popup.className === "popup pshow" || overlay.className === "overlay pshow") {
        popup.className = "popup";
        overlay.className = "overlay";
        plus.className = "menuicon";

        // close all others
        menu.className = "menu hide";
        hamburger.className = "menuicon";

    } else {
        popup.className = "popup pshow";
        overlay.className = "overlay oshow";
        plus.className = "menuicon toggled";
        
        // close all others
        menu.className = "menu hide";
        hamburger.className = "menuicon";
        popupPersons.className = "popup";
        overlayPersons.className = "overlay";
        popupMeals.className = "popup";
        overlayMeals.className = "overlay";
        popupFlavors.className = "popup";
        overlayFlavors.className = "overlay";
    }
};

var togglePopupPersons = function () {
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

var togglePopupMeals = function () {
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

var togglePopupFlavors = function () {
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

    