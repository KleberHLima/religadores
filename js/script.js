document.addEventListener("DOMContentLoaded", function () {

    const titulo = document.querySelector(".seletor");
    const cards = document.querySelectorAll(".cards");

    cards.forEach(card => {
        card.style.display = "none";
    });

    titulo.style.cursor = "pointer";

    titulo.addEventListener("click", function () {

        const aberto = cards[0].style.display === "block";

        cards.forEach(card => {
            card.style.display = aberto ? "none" : "block";
        });

    });

});
