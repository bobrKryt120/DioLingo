const backPeach = document.querySelector(".peach")
const leave = document.querySelector(".leave_from_me");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const next = document.querySelector(".next_button")

backPeach.addEventListener("click", () => {
    if (leave.style.display === "block") {
        leave.style.display = "none";
    } else {
        leave.style.display = "block";
    }
});

yes.addEventListener("click", () => {
    window.location.href = "second_page.html";
});

no.addEventListener("click", () => {
    leave.style.display = "none";
});

next.addEventListener("click", () => {
    window.location.href = "third_lesson.html";
});
