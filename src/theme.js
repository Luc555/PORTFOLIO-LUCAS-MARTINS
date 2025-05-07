document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        console.error("Botão de tema não encontrado!");
        return;
    }

    // Aplica imediatamente o tema armazenado antes do carregamento visível
    const currentTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.toggle("dark-mode", currentTheme === "dark");

    // Atualiza o texto do botão corretamente
    themeToggle.textContent = currentTheme === "dark" ? "Modo Claro" : "Modo Escuro";

    themeToggle.addEventListener("click", function () {
        // Desabilita temporariamente o botão para evitar múltiplos cliques rápidos
        themeToggle.disabled = true;

        // Alterna o tema
        const newTheme = document.body.classList.toggle("dark-mode") ? "dark" : "light";

        // Atualiza o nome do botão instantaneamente
        themeToggle.textContent = newTheme === "dark" ? "Modo Claro" : "Modo Escuro";

        // Salva no localStorage
        localStorage.setItem("theme", newTheme);

        // Reativa o botão após um pequeno intervalo
        setTimeout(() => {
            themeToggle.disabled = false;
        }, 200);
    });
});
