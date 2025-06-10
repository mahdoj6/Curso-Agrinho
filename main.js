document.addEventListener("DOMContentLoaded", function () {
    console.log("Site carregado!");

    // Evento para formulário futuro
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Mensagem enviada! Retornaremos em breve.");
        });
    }
});
