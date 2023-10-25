var toggleMenu = function () {
    if (menu.className === "menu show") {
        menu.className = "menu hide";
        hamburger.className = "menuicon";
    } else {
        menu.className = "menu show";
        hamburger.className = "menuicon toggled";
    }
};

var togglePopup = function () {
    if (popup.className === "popup pshow" || overlay.className === "overlay pshow") {
        popup.className = "popup";
        overlay.className = "overlay";
        plus.className = "menuicon";
    } else {
        popup.className = "popup pshow";
        overlay.className = "overlay oshow";
        plus.className = "menuicon toggled";
    }
};
