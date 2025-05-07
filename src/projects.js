document.addEventListener('DOMContentLoaded', function() {
    console.log('Projects script carregado.');

    const projectCards = document.querySelectorAll('.projeto-card');

});


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const video = document.querySelector(".projeto-card video");
        const projejctcard = document.querySelector(".projeto-card");

        if (video) {
            video.addEventListener("mouseenter", () => video.play());
            projejctcard.addEventListener("mouseleave", () => video.pause());
        } else {
            console.error("Elemento <video> não encontrado! Verifique se ele está no HTML.");
        }
    }, 1000); // Espera 1 segundo antes de buscar o elemento
});

