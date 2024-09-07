function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa e converte para letras minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado da sua lista (assumindo que 'dados' é um array)
    for (let dado of dados) {
      // Converte o título e a descrição do dado para letras minúsculas para facilitar a comparação
      let titulo = dado.TipoDeAtaque.toLowerCase();
      let descricao = dado.Descricao.toLowerCase();
  
      // Verifica se o título ou a descrição contém o termo pesquisado
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        // Se encontrar um resultado, adiciona um novo elemento HTML à string 'resultados'
        resultados += `
          <div class="item-resultado">
            <h2>${dado.TipoDeAtaque}</h2>
            <p>${dado.Descricao}.</p>
            <h3>Medidas De Segurança</h3>
            <p>${dado.MedidasDeSeguranca}</p>
            <button class="botao-saber-mais"><a href=${dado.LinkParaSaberMais} target="_blank">Mais informações</a></button>
          </div>
        `;
      }
  
      // Verifica se o campo de pesquisa está vazio e exibe uma mensagem caso esteja
      if (campoPesquisa == "") {
        section.innerHTML = "<h2>Você não preencheu o campo de pesquisa!</h2>";
        return; // Interrompe a função
      }
    }
  
    // Se nenhum resultado foi encontrado, exibe uma mensagem
    if (!resultados) {
      resultados = "<h2>Não foi encontrado resultados para essa pesquisa!</h2>";
    }
  
    // Atribui a string 'resultados' ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }

 function todos() {
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    for (let dado of dados) {
        section.innerHTML += `
        <div class="item-resultado">
            <h2>${dado.TipoDeAtaque}</h2>
            <p>${dado.Descricao}.</p>
            <h3>Medidas De Segurança</h3>
            <p>${dado.MedidasDeSeguranca}</p>
            <button class="botao-saber-mais"><a href=${dado.LinkParaSaberMais} target="_blank">Mais informações</a></button>
          </div>
        `
    }
 }
