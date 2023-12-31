export function adicionarLivro(dataLivros){
    //console.log("Iniciando função de adicionar livro...");
    
    const capaLivro = document.getElementById('capa').value;
    const nomeLivro = document.getElementById('nome').value;
    const nomeAutor = document.getElementById('autor').value;

    if(capaLivro == '' || nomeLivro == '' || nomeAutor == ''){
        alert('Preencha todos os campos');
    } else{
        //++contador;

        const modal = document.getElementById('adicionar-container');
        const fade = document.getElementById('fade');

        modal.classList.toggle('hide');
        fade.classList.toggle('hide');

        /*console.log(capaLivro);
        console.log(nomeLivro);
        console.log(nomeAutor);*/
        
        /*const livro = document.createElement("div");
        livro.id = `livro_${contador}`;
        livro.className = "livro-container";
        livro.innerHTML =`<img src="${capaLivro}" alt="capa do livro" class="capaDoLviro">
        <div class="lerlivro"><p onclick="lerLivro(${contador})" id="lerLivro_${contador}"><i id="lerLivroIcone_${contador}" class="bi bi-book"></i> Ler</p><p onclick="apagarLivro(${contador})"><i class="bi bi-trash"></i> Apagar</p></div>
        <p class="tituloDoLivro">${nomeLivro}</p>
        <p class="autorDoLivro">${nomeAutor}</p>
        `;
        listaDeLivros.appendChild(livro);*/

        //armazenar no localStorage
        const livroAtual = {
            //"id": id,
            "capaLivro": capaLivro,
            "nomeLivro": nomeLivro,
            "nomeAutor": nomeAutor,
            "status": "Ler"
        };

        //criar id
        if(dataLivros.length == 0){
            //id = 0;
            console.log(dataLivros.length);
            livroAtual.id = 0;
        } else{
            livroAtual.id = dataLivros[dataLivros.length - 1].id + 1;
            console.log(dataLivros.length);
        }

        dataLivros.push(livroAtual);
        localStorage.setItem("livros", JSON.stringify(dataLivros));

        console.log(dataLivros);
        //console.log(contador);
        console.log("Finalizando a função de adicionar livro...");
        //window.location.href = "index.html";
        window.location.reload();
    }
}
