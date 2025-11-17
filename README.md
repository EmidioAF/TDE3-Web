# Documentação do Projeto

# Consumo de API com JavaScript (GET e POST)

Este projeto demonstra como consumir uma API pública usando JavaScript, utilizando os métodos HTTP **GET** e **POST**, com `fetch`, `async/await`, tratamento de erros e exibição dos dados na página.

---

## Objetivo

O projeto tem como meta:

- Usar uma API pública.
- Fazer duas requisições diferentes (**GET** e **POST**).
- Exibir os dados de forma organizada no HTML.
- Tratar erros utilizando `try/catch`.
- Implementar código assíncrono com `async/await`.
- Publicar o projeto no GitHub Pages ou semelhante.

---

## API Utilizada

Foi usada a API pública **JSONPlaceholder**, ideal para testes:

**URL base:**  
https://jsonplaceholder.typicode.com/

Ela fornece diversos endpoints falsos para simulação, como `/posts`, `/users`, `/comments`, etc.

No projeto foram usados:

### ✔ GET `/posts`
Retorna uma lista de posts em JSON.

### ✔ POST `/posts`
Simula a criação de um novo post e retorna o objeto enviado.

---

## Estrutura do Projeto

```

/
│── index.html
│── script.js
│── README.md

````

---

## Como Funciona

### GET – Buscar Posts
A função `carregarPosts()` faz uma requisição GET e exibe os primeiros 5 posts na tela.

### POST – Criar Novo Post
A função `criarPost()` envia um objeto JSON e exibe a resposta retornada pela API.

Ambas usam `async/await`:

```javascript
const response = await fetch(apiURL);
const dados = await response.json();
````

Com tratamento de erros:

```javascript
if (!response.ok) {
  throw new Error("Erro: " + response.status);
}
```

---

## Como Executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no navegador.
3. Clique nos botões:

   * **Carregar Posts (GET)**
   * **Criar Novo Post (POST)**
