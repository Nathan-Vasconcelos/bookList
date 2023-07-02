const pesquisaPesquisaContainerMobile = document.getElementById('pesquisa-container-mobile-modal');
const fadePesquisa = document.getElementById('fadePesquisa');
const botaoPesquisaMobile = document.getElementById('botaoPesquisaMobile');

toggleModalMobile = () => {
    pesquisaPesquisaContainerMobile.classList.toggle('hide');
    fadePesquisa.classList.toggle('hide');
}

[botaoPesquisaMobile, fadePesquisa].forEach((elemento) =>{
    elemento.addEventListener('click', () => toggleModalMobile());
})
