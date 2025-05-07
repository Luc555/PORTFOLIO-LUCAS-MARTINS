document.addEventListener("DOMContentLoaded", function () {
    console.log("Contact script carregado.");

    const form = document.querySelector("#contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const mensagem = document.getElementById("mensagem").value;

            if (nome && email && mensagem) {
                // Envio do e-mail via EmailJS
                emailjs.init("nMgPtuSIKdgQ07R7v");
                emailjs.send("service_pipkyxi", "template_eqibnnh", {
                    name: nome,
                    email: email,
                    message: mensagem
                })
                .then(() => {
                    alert(`Obrigado pelo contato, ${nome}! Seu e-mail foi enviado.`);
                    form.reset(); // Limpa os campos após envio
                })
                .catch(error => {
                    alert("Erro ao enviar e-mail. Tente novamente mais tarde.");
                    console.error("Erro EmailJS:", error);
                });
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    } else {
        console.error("Elemento de formulário não encontrado! Verifique o ID no contact.html.");
    }
});
