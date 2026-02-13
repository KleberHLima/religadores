document.addEventListener("DOMContentLoaded", function () {

    const seletores = document.querySelectorAll(".seletor");

    seletores.forEach(function (seletor) {

        const titulo = seletor.querySelector("h2");

        titulo.addEventListener("click", function () {

            seletor.classList.toggle("ativo");

        });

    });

});
