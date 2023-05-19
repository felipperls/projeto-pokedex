//variavél para pegar a imagem do sol
const imagemBotoaoTrocaDeTema = document.querySelector(".imagem-botao")

// pegar o Id do HTML que muda o tema. 
const botaoAlterarTema = document.getElementById("botao-alterar-tema")

//pegar o elemento com o JS no HTML correspondente ao body.
const body = document.querySelector("body");

//identificar o clique do usuário no botão.
botaoAlterarTema.addEventListener("click", () => {

    // verificar se o body ja possui a classe modo escuro
    const modoEsucuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEsucuroEstaAtivo) {
        //voltar a imagem para sol e alterar para o modo claro (remover a classe modo-escuro)
        body.classList.remove("modo-escuro")

        //alterar imagem do botão de sol para lua
        imagemBotoaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }

    else {
        //adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro")

        //alterar imagem do botão de sol para lua
        imagemBotoaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    }
})