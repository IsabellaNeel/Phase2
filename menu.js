var toggleMenu = function () {
    if (menu.className === "Menu show") {
        menu.className = "Menu hide";
        hamburger.className = "hamburger";
    } else {
        menu.className = "Menu show";
        hamburger.className = "hamburger toggled";
    }
};
