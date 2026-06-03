const knapper = document.querySelectorAll(".toggleBtn");

knapper.forEach(btn => {
    btn.addEventListener("click", () => {

        const panel = btn.nextElementSibling;

        // close all other sections
        document.querySelectorAll(".container2, .container3, .container4, .container5, .container6")
            .forEach(box => {
                if (box !== panel) {
                    box.classList.add("skjult");
                }
            });

        // toggle current section
        panel.classList.toggle("skjult");
    });
});