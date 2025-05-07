document.addEventListener("DOMContentLoaded", function () {
    console.log("Site carregado corretamente.");
    
    // Verifica se há algum link do menu que corresponda à página atual e adiciona classe ativa
    const menuItems = document.querySelectorAll("#menu a");
    const currentPath = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual

    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentPath) {
            item.classList.add("active"); // Adiciona classe ativa ao link correspondente
        }

        item.addEventListener("click", function (event) {
            // Permite navegação normal sem preventDefault()
            console.log(`Navegando para: ${item.getAttribute("href")}`);
        });
    });
});


