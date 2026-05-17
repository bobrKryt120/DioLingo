const lessonButton = document.querySelector(".lesson_button1");
const burgerMenu = document.querySelector(".burger_menu")
const menu = document.querySelector(".menu");
const peach = document.querySelector(".peach")


burgerMenu.addEventListener("click", () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

peach.addEventListener("click", () => {
    window.location.href = "first_page.html";
});    

lessonButton.addEventListener("click", () => {
    window.location.href = "lesson.html";
});
