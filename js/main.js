import { adicionarLivro } from "./adicionarLivro.js";
import { carregarLivros } from "./carregarLivros.js";
import { mensagemListaVazia } from "./mensagemListaVazia.js";
//import { lerLivro } from "./lerLivro.js";
//let contador = 0;
const dataLivros = JSON.parse(localStorage.getItem("livros")) || [];
//const listaDeLivros = document.getElementById('listaDeLivros');

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

botaoAdicionar.addEventListener("click", () =>{
    adicionarLivro(dataLivros);
});
