document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       ABRIR / FECHAR SEÇÃO
    ========================== */

    const seletores = document.querySelectorAll(".seletor");

    seletores.forEach(function (seletor) {

        const titulo = seletor.querySelector("h2");
        const container = seletor.querySelector(".cards_img");

        container.style.display = "none";
        titulo.style.cursor = "pointer";

        titulo.addEventListener("click", function () {

            const aberto = container.style.display === "grid";
            container.style.display = aberto ? "none" : "grid";

        });

    });

/* ==========================
   LIGHTBOX DAS IMAGENS
========================== */

const images = document.querySelectorAll(".zoom-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxText = document.getElementById("lightbox-text");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function showImage(index) {
    const card = images[index].closest(".cards");
    const texto = card.querySelector("p").innerHTML;

    lightbox.style.display = "block";
    lightboxImg.src = images[index].src;
    lightboxText.innerHTML = texto;

    currentIndex = index;
}

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        showImage(index);
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

});
