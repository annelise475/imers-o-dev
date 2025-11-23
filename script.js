// Seleciona os elementos do DOM de forma mais específica e correta
let cardContainer = document.querySelector(".cardContainer");
let campoBusca = document.querySelector("#searchInput");
let dados = [];

campoBusca.addEventListener("input", iniciarBusca);

// Inicia a aplicação carregando os dados iniciais
iniciarBusca();

async function iniciarBusca() {
    // Se os dados ainda não foram carregados, busca do JSON.
    if (dados.length === 0) {
        try {
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Falha ao buscar dados:", error);
            return; // Interrompe a execução se houver erro
        }
    }

    const termoBusca = campoBusca.value.toLowerCase();
    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca) ||
        dado.tags.some(tag => tag.toLowerCase().includes(termoBusca))
    );

    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    if (!cardContainer) return; // Garante que o container existe antes de continuar

    cardContainer.innerHTML = ""; // Limpa os cards existentes
    const fragment = document.createDocumentFragment(); // Usa um fragmento para melhor performance

    if (dados.length === 0) {
        cardContainer.innerHTML = `<p class="no-results">Nenhum resultado encontrado.</p>`;
        return;
    }

    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");

        // Mapeia o array de recomendações para uma string de <li>s
        const recomendacoesHtml = dado.recomendacoes.map(rec => 
            `<li><a href="${rec.link}" target="_blank">${rec.titulo}</a></li>`
        ).join(''); // .join('') transforma o array de strings em uma única string

        // Cria o HTML interno do card usando a estrutura correta dos dados
        // Usar innerHTML aqui é seguro porque os dados vêm do nosso próprio data.json
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p><strong>Descrição:</strong> ${dado.descricao}</p>
            <p><strong>Indicação:</strong> ${dado.indicacao}</p>
            <p><strong>Recomendações:</strong></p>
            <ul>
                ${recomendacoesHtml}
            </ul>
        `;

        fragment.appendChild(article);
    }

    cardContainer.appendChild(fragment); // Adiciona o fragmento ao DOM de uma só vez
}