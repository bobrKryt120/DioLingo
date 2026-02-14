document.querySelector(".btn-start").addEventListener("click", function() {
    document.querySelector(".hero-section").style.display = "none";
    document.querySelector(".features-section").style.display = "none";
    document.querySelector(".dark-cards-section").style.display = "none";
    document.querySelector(".footer").style.display = "none";

    document.getElementById("secondPage").classList.add("active");
});
