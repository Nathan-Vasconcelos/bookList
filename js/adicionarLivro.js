const listaDeLivros = document.getElementById('listaDeLivros');
const botaoAdicionar = document.getElementById('botaoAdicionar');

function adicionarLivro(){
    //console.log("Iniciando função de adicionar livro...");

    const capaLivro = document.getElementById('capa').value;
    const nomeLivro = document.getElementById('nome').value;
    const nomeAutor = document.getElementById('autor').value;

    const modal = document.getElementById('adicionar-container');
    const fade = document.getElementById('fade');

    modal.classList.toggle('hide');
    fade.classList.toggle('hide');

    /*console.log(capaLivro);
    console.log(nomeLivro);
    console.log(nomeAutor);*/
    
    const livro = document.createElement("div");
    livro.className = "livro-container";
    livro.innerHTML = `
    <img src="${capaLivro}" alt="capa do livro" class="capaDoLviro">
            <p class="tituloDoLivro">${nomeLivro}</p>
            <p class="autorDoLivro">${nomeAutor}</p>
    `;
    listaDeLivros.appendChild(livro);

    console.log("Finalizando a função de adicionar livro...");
}

botaoAdicionar.addEventListener("click", adicionarLivro);
