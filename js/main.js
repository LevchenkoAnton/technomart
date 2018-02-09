var burgerButton = document.querySelector(".mobile__open-nav");
var closeButton = document.querySelector(".mobile-nav__close");
var mainNav = document.querySelector(".mobile-nav");

burgerButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (mainNav.classList.contains("mobile-nav--closed")) {
        mainNav.classList.remove("mobile-nav--closed");
    } else {
        mainNav.classList.add("mobile-nav--closed");
    }

    closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        mainNav.classList.add("mobile-nav--closed")

    })
});
