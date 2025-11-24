# 📚 Base de Conhecimento: Literatura Infantil por Nível de Leitura

Este projeto é uma página web que funciona como uma base de conhecimento, catalogando livros infantis de acordo com diferentes estágios e níveis de desenvolvimento da leitura. O objetivo é ajudar pais, educadores e os próprios leitores a encontrar obras adequadas para cada fase.

![Exemplo de como o site se parece](https://via.placeholder.com/700x350.png?text=Insira+um+print+da+sua+página+aqui)

## ✨ Funcionalidades

- **Listagem de Níveis:** Exibe todos os níveis de leitura catalogados, com descrição, indicação e recomendações de livros.
- **Busca Dinâmica:** Permite que o usuário pesquise por um nível de leitura específico e filtre os resultados em tempo real.
- **Links Externos:** Fornece links diretos para a compra ou para mais informações sobre os livros recomendados.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web padrões:

- **HTML5:** Para a estrutura semântica do conteúdo.
- **CSS3:** Para a estilização e o layout da página.
- **JavaScript (Vanilla):** Para a manipulação do DOM, lógica de busca e carregamento dinâmico dos dados.
- **JSON:** Como formato para armazenar e gerenciar a base de dados dos níveis de leitura e livros.

## 🚀 Como Executar o Projeto

Este é um projeto front-end simples e não requer um servidor web para ser executado.

1.  Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2.  Navegue até o diretório do projeto.
3.  Abra o arquivo `index.html` em seu navegador de preferência (Google Chrome, Firefox, etc.).

E pronto! A página será carregada com todos os dados.

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Se você deseja adicionar um novo nível de leitura ou uma nova recomendação de livro, siga os passos abaixo:

1.  Faça um "Fork" deste repositório.
2.  Abra o arquivo `data.json`.
3.  Para adicionar um novo nível, adicione um novo objeto ao array principal, seguindo a estrutura existente:
    ```json
    {
      "nome": "Nome do Nível",
      "descricao": "Descrição detalhada do nível.",
      "indicacao": "Tipo de livro indicado.",
      "recomendacoes": [
        { "titulo": "Título do Livro", "link": "https://...", "imagem_url": "https://..." }
      ],
      "tags": ["Tag1", "Tag2"]
    }
    ```
4.  Envie um "Pull Request" com suas alterações.
