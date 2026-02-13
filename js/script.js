document.addEventListener("DOMContentLoaded", function () {

    const seletores = document.querySelectorAll(".seletor");

    seletores.forEach(function(seletor) {

        const titulo = seletor.querySelector("h2");
        const container = seletor.querySelector(".cards_img");

        // começa fechado
        container.style.display = "none";

        titulo.style.cursor = "pointer";

        titulo.addEventListener("click", function () {

            const aberto = container.style.display === "grid";

            container.style.display = aberto ? "none" : "grid";

        });

    });

});
