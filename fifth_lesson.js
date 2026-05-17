const backPeach = document.querySelector(".peach")
const leave = document.querySelector(".leave_from_me");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const optionButtons = document.querySelectorAll(".option-btn");
const nextButton = document.querySelector(".next_button");
const correctButton = document.querySelector("#btn-is");

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

optionButtons.forEach((button) => {
    button.addEventListener("click", () => {

        optionButtons.forEach((btn) => {
            btn.style.border = "";
            btn.style.borderRadius = "";
            btn.style.width = "";
            btn.style.height = "";
            btn.style.boxShadow = "";
            btn.style.background = "";
            btn.style.fontFamily = "";
            btn.style.fontWeight = "";
            btn.style.fontSize = "";
            btn.style.textAlign = "";
            btn.style.color = "";
            btn.style.cursor = "";
            btn.style.transition = "";
        });

        if (button === correctButton) {

            button.style.border = "2px solid #00ff04";
            button.style.borderRadius = "50px";
            button.style.width = "131px";
            button.style.height = "40px";
            button.style.boxShadow = "0 0 1px 3px rgba(0, 0, 0, 0.25)";
            button.style.background = "#1a1a1a";
            button.style.fontFamily = "Work Sans";
            button.style.fontWeight = "300";
            button.style.fontSize = "20px";
            button.style.textAlign = "center";
            button.style.color = "#fff";
            button.style.cursor = "pointer";
            button.style.transition = "0.25s";

            nextButton.style.borderRadius = "50px";
            nextButton.style.width = "145px";
            nextButton.style.height = "45px";
            nextButton.style.zIndex = "5";
            nextButton.style.background = "#151515";
            nextButton.style.fontFamily = "Work Sans";
            nextButton.style.fontWeight = "400";
            nextButton.style.fontSize = "26px";
            nextButton.style.display = "flex";
            nextButton.style.justifyContent = "center";
            nextButton.style.alignItems = "center";
            nextButton.style.marginTop = "32px";
            nextButton.style.color = "#fff";
            nextButton.style.cursor = "pointer";

            nextButton.onmouseover = () => {
                nextButton.style.boxShadow = "0 0 250px 0 #fff, 0 0 1px 4px rgba(0, 0, 0, 0.31), inset 0 -3px 1px 0 rgba(0, 0, 0, 0.31)";
                nextButton.style.background = "linear-gradient(135deg, #ff9200 0%, #ffbc63 100%)";
                nextButton.style.width = "150px";
                nextButton.style.height = "50px";
                nextButton.style.textShadow = "0 0 5px #fff";
                nextButton.style.fontWeight = "300";
                nextButton.style.fontSize = "28px";
                nextButton.style.color = "#fff";
                nextButton.style.transition = "0.25s";
            };

            nextButton.onmouseout = () => {
                nextButton.style.boxShadow = "";
                nextButton.style.background = "#202020";
                nextButton.style.width = "145px";
                nextButton.style.height = "45px";
                nextButton.style.textShadow = "";
                nextButton.style.fontWeight = "400";
                nextButton.style.fontSize = "26px";
                nextButton.style.color = "#99999d";
            };

            nextButton.onmousedown = () => {
                nextButton.style.marginTop = "34px";
                nextButton.style.boxShadow = "inset 0 -1px 1px 0 rgba(0, 0, 0, 0.31), 0 0 1px 2px rgba(0, 0, 0, 0.31), 0 0 150px 0 #fff";
            };

            nextButton.onmouseup = () => {
                nextButton.style.marginTop = "32px";
            };

            nextButton.addEventListener("click", () => {
                window.location.href = "sixth_lesson.html";
            });

        } else {

            button.style.border = "2px solid #f00";
            button.style.borderRadius = "50px";
            button.style.width = "131px";
            button.style.height = "40px";
            button.style.boxShadow = "0 0 1px 3px rgba(0, 0, 0, 0.25)";
            button.style.background = "#1a1a1a";
            button.style.fontFamily = "Work Sans";
            button.style.fontWeight = "300";
            button.style.fontSize = "20px";
            button.style.textAlign = "center";
            button.style.color = "#fff";
            button.style.cursor = "pointer";
            button.style.transition = "0.25s";
        }
    });
});
