// Inicializa o EmailJS
(function(){
    emailjs.init("SEU_USER_ID"); // substitua pelo seu User ID do EmailJS
})();

document.getElementById("form-contato").addEventListener("submit", function(e){
    e.preventDefault();

    const params = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value
    };

    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", params)
    .then(function(res) {
        document.getElementById("status").innerText = "✅ Mensagem enviada com sucesso!";
    }, function(err) {
        document.getElementById("status").innerText = "❌ Erro ao enviar. Tente novamente.";
    });

    // limpa campos
    document.getElementById("form-contato").reset();
});
