//const listaDeLivros = document.getElementById('listaDeLivros');
//const botaoAdicionar = document.getElementById('botaoAdicionar');
let contador = 0;
export function adicionarLivro(){
    //console.log("Iniciando função de adicionar livro...");
    ++contador;

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
    livro.id = `livro_${contador}`;
    livro.className = "livro-container";
    livro.innerHTML =`<img src="${capaLivro}" alt="capa do livro" class="capaDoLviro">
    <div class="lerlivro"><p onclick="lerLivro(${contador})" id="lerLivro_${contador}"><i id="lerLivroIcone_${contador}" class="bi bi-book"></i> Ler</p><p onclick="apagarLivro(${contador})"><i class="bi bi-trash"></i> Apagar</p></div>
    <p class="tituloDoLivro">${nomeLivro}</p>
    <p class="autorDoLivro">${nomeAutor}</p>
    `;
    listaDeLivros.appendChild(livro);

    console.log("Finalizando a função de adicionar livro...");
    console.log(contador);
}
//botaoAdicionar.addEventListener("click", adicionarLivro);
/*`<img src="${capaLivro}" alt="capa do livro" class="capaDoLviro">
    <p onclick="lerLivro(${contador})" id="lerLivro_${contador}" class="lerlivro"><i id="lerLivroIcone_${contador}" class="bi bi-book"></i> Ler</p>
    <p class="tituloDoLivro">${nomeLivro}</p>
    <p class="autorDoLivro">${nomeAutor}</p>
    `;

`<img src="https://img.bertrand.pt/images/sobre-a-brevidade-da-vida-seneca/NDV8Mjc4MzY2MjJ8MjQyMTg0NzV8MTY2Njk2OTQzODAwMA==/500x" alt="capa do livro" class="capaDoLviro">
<div class="lerlivro"><p id="lerLivro"><i id="icone" class="bi bi-book"></i> Ler</p><p><i class="bi bi-trash"></i> Apagar</p></div>
<p class="tituloDoLivro">A brevidade da vida</p>
<p class="autorDoLivro">Sêneca</p>`*/