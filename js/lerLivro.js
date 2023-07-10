//const lerlivro = document.getElementById('lerLivro');
//const lerLivroIcone = document.getElementById('lerLivroIcone');

function lerLivro (id){
    console.log(id);
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
        console.log("true");
    } else{
        lerlivro.innerHTML = `<i id="lerLivroIcone_${id}" class="${lerLivroIcone.className}"></i> Ler`;
        console.log("flase");
    }
}
//lerlivro.addEventListener("click", lerLivro);
