const apiURL = "https://jsonplaceholder.typicode.com/posts";

const postsDiv = document.getElementById("posts");
const btnGet = document.getElementById("btnGet");
const btnPost = document.getElementById("btnPost");

// ------------------------------------------------------------
// GET: Buscar posts da API
// ------------------------------------------------------------
async function carregarPosts() {
  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Erro ao buscar dados: " + response.status);
    }

    const dados = await response.json();
    mostrarPosts(dados.slice(0, 5)); // Mostrar apenas 5 posts
  } catch (erro) {
    postsDiv.innerHTML = `<p style="color:red">${erro.message}</p>`;
  }
}

// ------------------------------------------------------------
// POST: Criar um novo post na API
// ------------------------------------------------------------
async function criarPost() {
  try {
    const novoPost = {
      title: "Post criado via API",
      body: "Este é um exemplo enviado usando fetch e async/await.",
      userId: 1
    };

    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoPost)
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar dados: " + response.status);
    }

    const resultado = await response.json();
    postsDiv.innerHTML =
      `<p style="color:green">Post criado com sucesso!</p>
       <pre>${JSON.stringify(resultado, null, 2)}</pre>`;
  } catch (erro) {
    postsDiv.innerHTML = `<p style="color:red">${erro.message}</p>`;
  }
}

// ------------------------------------------------------------
// Função para exibir posts na tela
// ------------------------------------------------------------
function mostrarPosts(lista) {
  postsDiv.innerHTML = ""; 

  lista.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
    postsDiv.appendChild(div);
  });
}

// Eventos dos botões
btnGet.addEventListener("click", carregarPosts);
btnPost.addEventListener("click", criarPost);
