/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
*/

// PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

// PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        // PASSO 3 - remover a classe aberto só do cartão que tá aberto
        EsconderCartaoPokedev();

        // PASSO 4 - ao clicar em um pokedev da listagem pegamos o id desse pokedev pra saber qual cartão abrir
        const idPokedevSelecionado = MostrarCartaoPokedevSelecionado(pokedev);

        // PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        DesativarPokedevNaListagem();

        // PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
        AtivarPokedevSelecionadoNaListagem(idPokedevSelecionado);
    })
})

function AtivarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const idPokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    idPokedevSelecionadoNaListagem.classList.add("ativo");
}

function DesativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function MostrarCartaoPokedevSelecionado
(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const CartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    CartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function EsconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
