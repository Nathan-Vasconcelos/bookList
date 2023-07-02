const botaoAbrirModal = document.getElementById('botaoAbrirModal');
const botaoFecharModal = document.getElementById('botaoFecharModal');
const modal = document.getElementById('adicionar-container');
const fade = document.getElementById('fade');

toggleModal = () => {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[botaoAbrirModal, botaoFecharModal, fade].forEach((elemento) =>{
    elemento.addEventListener('click', () => toggleModal());
})
