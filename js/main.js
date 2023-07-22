import { adicionarLivro } from "./adicionarLivro.js";
import { carregarLivros } from "./carregarLivros.js";
import { mensagemListaVazia } from "./mensagemListaVazia.js";

const dataLivros = JSON.parse(localStorage.getItem("livros")) || [];

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
