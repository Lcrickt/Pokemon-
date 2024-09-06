function pesquisar() {
    // Obtém a referência ao elemento HTML com o ID "resultados-pesquisa".
    // Esse elemento será utilizado para exibir os resultados da pesquisa.
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa fou uma string sem nada 
if(!campoPesquisa){
  section.innerHTML = "<p>Sai fora vacilão</p>"
  return
}

campoPesquisa = campoPesquisa.toLowerCase() 

    console.log("campoPesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao= ""; 
    let tags = "";

    // Itera sobre cada elemento (dado) da lista de dados (assumindo que 'dados' é um array).
    // Para cada dado, cria uma nova div com as informações do dado e adiciona à string 'resultados'.
for (let dado of dados) {
   titulo = dado.titulo.toLocaleLowerCase()
   descricao = dado.descricao.toLowerCase() 
   tags = dado.tags.toLowerCase() 


//se titulo icludes campoPesquisa
 if (dado.titulo && dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

  // cria um novo elemento
  resultados += `
    <div class="item-resultado">
      <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href=${dado.link} target="_blank">Mais informações sobre</a>
    </div>
  `;
}

    }

    if(!resultados){resultado = "<p>Sai fora vacilão. Voce nao escreveu nada </p>"

    }
  
    // Atribui o conteúdo da string 'resultados' ao elemento 'section',
    // substituindo o conteúdo anterior por novos resultados da pesquisa.
    section.innerHTML = resultados;
  }

