import { adicionarLivro } from "./adicionarLivro.js";
//import { lerLivro } from "./lerLivro.js";
//let contador = 0;

//adicionarLivro variaveis
const listaDeLivros = document.getElementById('listaDeLivros');
const botaoAdicionar = document.getElementById('botaoAdicionar');

botaoAdicionar.addEventListener("click", () =>{
    adicionarLivro();
});
