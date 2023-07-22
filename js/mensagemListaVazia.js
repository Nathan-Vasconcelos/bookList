export function mensagemListaVazia(){
    const mensagem = document.createElement("p");
    mensagem.className = "mensagemListaVazia";
    mensagem.innerText = "Sua lista de livros está vazia, clique no botão superior direito para adicionar um livro";
    listaDeLivros.appendChild(mensagem);
}