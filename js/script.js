
   /* AF - Avaliação Final - Linguagens de Programação
    Tema do Projeto: Astronomia
    Nome do Site: Observatório Aurora
    Aluno 1: Giovanna Carolina Moreira - RA 250859
    Aluno 2: Gabrielle Conceião Valença - RA 250797
    Professor: Abimael de Oliveira
    Data de entrega: 07/06 */

/*Botão voltar ao topo*/ 

const botaoTopo = document.getElementById("botaoTopo");

if (botaoTopo) {
    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            botaoTopo.style.display ="block";
        } else {
            botaoTopo.style.display = "none";
        }
    });
}

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/*Tema Claro/Escuro */

function alternarTema() {
    document.body.classList.toggle("tema-escuro");
}

function validarFormulario(event) {
    event.preventDefault();

    const nome =
        document.getElementById("nome").value.trim();
    
    const email =
        document.getElementById("email").value.trim();

    const telefone =
        document.getElementById("telefone").value.trim();

    const assunto =
        document.getElementById("assunto").value;
    
    const mensagem =
        document.getElementById("mensagem").value.trim();
        
    const mensagemFormulario =
        document.getElementById("mensagemFormulario");

    if (
        nome === "" ||
        email === "" ||
        telefone === "" ||
        assunto === "" ||
        mensagem === "" 
    ){
        mensagemFormulario.textContent = 
            "Por favor, preencha todos os campos.";
        
        mensagemFormulario.style.color = "red";
        return;
    }

    mensagemFormulario.textContent = 
        "Mensagem enviada com sucesso!";

    mensagemFormulario.style.color = "green";

    document
        .getElementById("formularioContato")
        .reset();
}

/*Efeito cards galeria*/

const cards = document.querySelectorAll(".card-galeria, .card-novidade"
);

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
    card.style.transform = 
        "translateY(-8px) scale(1.02)";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = 
        "translateY(0) scale(1)";
});
   
});

 /*Mensagem console */

 console.log("Observatório Aurora carregado com sucesso!");