export function carregarLivros(livro){
    console.log("Iniciando a função carregarLivros.");
    //console.log(dataLivros);
    console.log(livro);

    //verificar o status do livro
    let classIconeStatus = "";
    if (livro.status == "Ler"){
        classIconeStatus = "bi bi-book";
    } else{
        classIconeStatus = "bi bi-journal-bookmark";
    }

    //construir o a interface os elementos html com o dados
    const livroContainer = document.createElement("div");
        livroContainer.id = `livro_${livro.id}`;
        livroContainer.className = "livro-container";
        livroContainer.innerHTML =`<img src="${livro.capaLivro}" alt="capa do livro" class="capaDoLviro">
        <div class="lerlivro"><p onclick="lerLivro(${livro.id})" id="lerLivro_${livro.id}"><i id="lerLivroIcone_${livro.id}" class="${classIconeStatus}"></i> ${livro.status}</p><p onclick="apagarLivro(${livro.id})"><i class="bi bi-trash"></i> Apagar</p></div>
        <p class="tituloDoLivro">${livro.nomeLivro}</p>
        <p class="autorDoLivro">${livro.nomeAutor}</p>
        `;
        listaDeLivros.appendChild(livroContainer);
}