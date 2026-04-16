# 🎬 Netflix Clone

Um clone da interface da Netflix desenvolvido com React, consumindo a API do TMDB (The Movie Database). O projeto inclui funcionalidades como busca de filmes, lista personalizada, sistema de perfil e design responsivo.

---

## ✨ Funcionalidades

- 🎥 **Catálogo de Filmes** - Consumo da API do TMDB com filmes e séries reais
- 🔍 **Barra de Pesquisa** - Busque por filmes, séries e atores
- 📋 **Minha Lista** - Adicione e remova filmes da sua lista personalizada (salva no localStorage)
- 👤 **Perfil Personalizado** - Escolha seu avatar e edite seu nome
- ▶️ **Trailers** - Assista trailers dos filmes diretamente no YouTube
- 🎨 **UI Moderna** - Animações suaves, hover effects e scroll horizontal 

---

## 🎥 Demonstração

https://github.com/user-attachments/assets/2c157f5c-08e0-4b9a-a200-44ebe34a5535

---

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para construção da UI
- **Vite** - Build tool rápida
- **React Router DOM** - Navegação entre páginas
- **Axios** - Requisições HTTP
- **TMDB API** - Banco de dados de filmes e séries
- **CSS3** - Estilização com animações e responsividade

---

## 📁 Estrutura do Projeto

```bash
netflix-clone/
├── src/
│   ├── assets/
│   │   ├── logo.webp
│   │   └── avatars/
│   │       ├── perfil1.webp
│   │       ├── perfil2.webp
│   │       ├── perfil3.webp
│   │       ├── perfil4.webp
│   │       └── perfil5.webp
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Banner.css
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Row.jsx
│   │   ├── Row.css
│   │   ├── MovieModal.jsx
│   │   ├── MovieModal.css
│   │   ├── MyList.jsx
│   │   ├── MyList.css
│   │   ├── SearchBar.jsx
│   │   ├── SearchBar.css
│   │   ├── SearchResults.jsx
│   │   ├── SearchResults.css
│   │   ├── ProfileModal.jsx
│   │   └── ProfileModal.css
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── index.html
```
---
## 🎯 Funcionalidades em Detalhe
**🏠 Página Inicial**
- Banner com filme em destaque
- Linhas de categorias (Originais Netflix, Em Alta, Ação, Comédia, etc.)
- Scroll horizontal nos cards

**🔍 Busca**
- Pesquisa por filmes, séries e atores
- Página de resultados com grid responsivo
- Clique nos resultados abre modal com detalhes

**📋 Minha Lista**
- Adicione filmes à sua lista personalizada
- Remova filmes diretamente da lista
- Persistência com localStorage

**👤 Perfil**
- Escolha entre 5 avatares diferentes
- Edite seu nome de usuário
- Dados salvos no localStorage

**🎬 Modal de Detalhes**
- Informações completas do filme
- Botão Play para assistir trailer
- Botão para adicionar/remover da lista

---
## ⚙️ Como rodar o projeto
```bash
# Clone o repositório
git clone https://github.com/edufl/netflix-clone.git

# Entre na pasta
cd netflix-clone

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```
**Configure a API Key do TMDB**
-Acesse TMDB e crie uma conta
-Vá em Configurações > API e solicite uma chave
-Cole sua chave no arquivo src/services/api.js:
```bash
const API_KEY = 'sua_chave_aqui';
```

---
## 👨‍💻 Autor

Desenvolvido por **edufl**
