const botaoEfeito = document.querySelectorAll(".botao")
botaoEfeito.forEach(aplicarEfeito);

function aplicarEfeito(botao){
    botao.addEventListener("mouseover", adicionarClasse);
    botao.addEventListener("mouseout", removerClasse);
}

function adicionarClasse(event){
    event.currentTarget.classList.add("destaque");
}

function removerClasse(event){
    event.currentTarget.classList.remove("destaque");
}

