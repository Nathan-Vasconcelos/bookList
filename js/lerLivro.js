//const lerlivro = document.getElementById('lerLivro');
//const lerLivroIcone = document.getElementById('lerLivroIcone');
const dataLivros = JSON.parse(localStorage.getItem("livros")) || [];

function lerLivro (id){
    console.log("iniciando a função lerLivro")
    console.log(id);
    console.log(dataLivros);
    const lerLivroIcone = document.getElementById(`lerLivroIcone_${id}`);
    const lerlivro = document.getElementById(`lerLivro_${id}`);
    console.log("teste");
    //icone de livro
    console.log(lerLivroIcone);//null
    console.log(id);
    lerLivroIcone.classList.toggle("bi-book");
    lerLivroIcone.classList.toggle("bi-journal-bookmark");
    
    if(lerlivro.innerText == " Ler"){
        lerlivro.innerHTML = `<i id="lerLivroIcone_${id}" class="${lerLivroIcone.className}"></i> Lido`;
        dataLivros[dataLivros.findIndex(elemento => elemento.id === id)].status = "Lido";
        localStorage.setItem("livros", JSON.stringify(dataLivros));
        console.log("true");
    } else{
        lerlivro.innerHTML = `<i id="lerLivroIcone_${id}" class="${lerLivroIcone.className}"></i> Ler`;
        dataLivros[dataLivros.findIndex(elemento => elemento.id === id)].status = "Ler";
        localStorage.setItem("livros", JSON.stringify(dataLivros));
        console.log("flase");
    }
}
//lerlivro.addEventListener("click", lerLivro);
