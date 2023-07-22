function apagarLivro(id){
    const dataLivros = JSON.parse(localStorage.getItem("livros")) || [];
    console.log(`Apagar o livro com o id: livro_${id}`);
    const livro = document.getElementById(`livro_${id}`);
    livro.remove();

    //remover do localStorage
    dataLivros.splice(dataLivros.findIndex(elemento => elemento.id === id), 1);
    localStorage.setItem("livros", JSON.stringify(dataLivros));
}