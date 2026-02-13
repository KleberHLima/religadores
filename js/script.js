document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".cards");

    cards.forEach(card => {

        const titulo = card.querySelector("h2");
        const elementos = Array.from(card.children).filter(el => el.tagName !== "H2");

        // Criar wrapper para animar suavemente
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        wrapper.style.height = "0";
        wrapper.style.transition = "height 0.4s ease";

        // Move p e img para dentro do wrapper
        elementos.forEach(el => wrapper.appendChild(el));
        card.appendChild(wrapper);

        titulo.style.cursor = "pointer";

        titulo.addEventListener("click", function () {

            const isOpen = wrapper.style.height !== "0px" && wrapper.style.height !== "";

            // Fecha todos
            document.querySelectorAll(".cards > div").forEach(w => {
                w.style.height = "0";
            });

            if (!isOpen) {
                wrapper.style.height = wrapper.scrollHeight + "px";
            }

        });

    });

});
