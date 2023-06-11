// Parallax effect
window.addEventListener("scroll", function () {
    var parallax = document.querySelectorAll(".parallax");
    var scrollPosition = window.pageYOffset;

    parallax.forEach(function (element) {
        var offset = element.offsetTop;
        var distance = (scrollPosition - offset) * 0.7;

        element.style.backgroundPositionY = distance + "px";
    });
});

// Example JavaScript code
console.log("Welcome to my project control portfolio!");
