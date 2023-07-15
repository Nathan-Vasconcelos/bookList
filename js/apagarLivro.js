function apagarLivro(id){
    console.log(`Apagar o livro com o id: livro_${id}`);
    const livro = document.getElementById(`livro_${id}`);
    livro.remove();
}