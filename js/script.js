document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".cards");

    cards.forEach(card => {

        const titulo = card.querySelector("h2");

        // Criar wrapper interno
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        wrapper.style.height = "0";
        wrapper.style.transition = "height 0.4s ease";

        // Move tudo menos o H2 para dentro do wrapper
        Array.from(card.children).forEach(el => {
            if (el.tagName !== "H2") {
                wrapper.appendChild(el);
            }
        });

        card.appendChild(wrapper);

        titulo.style.cursor = "pointer";

        titulo.addEventListener("click", function () {

            const isOpen = wrapper.style.height !== "0px" && wrapper.style.height !== "";

            if (isOpen) {
                // FECHA
                wrapper.style.height = "0";
            } else {
                // ABRE
                wrapper.style.height = wrapper.scrollHeight + "px";
            }

        });

    });

});
