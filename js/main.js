import { adicionarLivro } from "./adicionarLivro.js";
import { carregarLivros } from "./carregarLivros.js";
import { mensagemListaVazia } from "./mensagemListaVazia.js";

const dataLivros = JSON.parse(localStorage.getItem("livros")) || [];
//let livrosbuscados = [];
//verificar se há livros na lista
if(dataLivros.length === 0){
    mensagemListaVazia();
}

//percorrer o dataLivros para construir a interface
dataLivros.forEach(livro => {
    carregarLivros(livro);
});

//adicionarLivro variaveis
const listaDeLivros = document.getElementById('listaDeLivros');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const botaoPesquisar = document.getElementById('botaoPesquisar');
const botaoPesquisarMobile = document.getElementById('botaoPesquisarMobile');

botaoAdicionar.addEventListener("click", () =>{
    adicionarLivro(dataLivros);
});

//Buscar livros
botaoPesquisar.addEventListener("click", () =>{
    const livroBuscado = document.getElementById('inputPesquisar').value;
    buscar(livroBuscado);
});

botaoPesquisarMobile.addEventListener("click", () =>{
    const livroBucado = document.getElementById('inputPesquisarMobile').value
    buscar(livroBucado);
});

function buscar(livroBuscado){
    console.log("buscando o livro");
    listaDeLivros.innerHTML = "";
    //const livrosbuscados = dataLivros.find(livro => livro.livroBuscado == livroBuscado);
    //const livrosbuscados = dataLivros.filter(livro => livro.livroBuscado in livroBuscado);
    //const resultadoBusca = dataLivros.indexOf(livroBuscado); //vai retornar -1 caso não encontre a palavra

    dataLivros.forEach(livro =>{
        //
        let resultadoBusca = livro.nomeLivro.indexOf(livroBuscado);
        if(resultadoBusca != -1){
            console.log(`Livro ${livroBuscado} encontrado`);
            console.log(livro);
            console.log(resultadoBusca);
            carregarLivros(livro);
        } else{
            console.log(`Livro: ${livroBuscado} não encontrado`);
            console.log(livro);
            console.log(resultadoBusca);
        }
    });
}