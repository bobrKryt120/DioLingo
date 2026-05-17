const getStarted = document.querySelector(".get_started_art p");
const commisionsAside = document.querySelector(".commisions_aside");
const main = document.querySelector("main");
const button = document.querySelector(".button_");
const backButton = document.querySelector(".back_but");

getStarted.addEventListener("click", () => {
    commisionsAside.style.display = "flex";
    main.style.filter = "blur(5px)";
});

button.addEventListener("click", () => {
    window.location.href = "second_page.html";
});

backButton.addEventListener("click", () => {
    commisionsAside.style.display = "none";
    main.style.filter = "none";
});
