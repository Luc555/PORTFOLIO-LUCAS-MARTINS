document.addEventListener('DOMContentLoaded', function() {
    console.log('Footer script carregado.');

    const footer = document.getElementById('footer');

    fetch('/pages/footer.html') // Certifique-se de que o caminho está correto
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data; // Insere o conteúdo do footer.html
        })
        .catch(error => console.error('Erro ao carregar footer:', error));
});
