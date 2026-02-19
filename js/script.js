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
   LIGHTBOX ISOLADO POR BLOCO
========================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxText = document.getElementById("lightbox-text");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let currentImages = [];

// pega apenas imagens dentro dos cards
document.querySelectorAll(".seletor").forEach(seletor => {

    const images = seletor.querySelectorAll(".cards_img .zoom-img");

    images.forEach((img, index) => {

        img.addEventListener("click", function (e) {

            e.stopPropagation(); // impede conflito

            currentImages = images;
            currentIndex = index;

            showImage();
        });

    });

});

function showImage() {

    if (!currentImages.length) return; // proteção extra

    const card = currentImages[currentIndex].closest(".cards");
    if (!card) return; // proteção extra

    const texto = card.querySelector("p")?.innerHTML || "";

    lightbox.style.display = "flex";
    lightboxImg.src = currentImages[currentIndex].src;
    lightboxText.innerHTML = texto;

    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentIndex === currentImages.length - 1 ? "none" : "block";
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < currentImages.length - 1) {
        currentIndex++;
        showImage();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showImage();
    }
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

});
