# 🎬 Netflix Clone

Um clone da interface da Netflix desenvolvido com React, consumindo a API do TMDB (The Movie Database). O projeto inclui funcionalidades como busca de filmes, lista personalizada, sistema de perfil e design responsivo.

## ✨ Funcionalidades

- 🎥 **Catálogo de Filmes** - Consumo da API do TMDB com filmes e séries reais
- 🔍 **Barra de Pesquisa** - Busque por filmes, séries e atores
- 📋 **Minha Lista** - Adicione e remova filmes da sua lista personalizada (salva no localStorage)
- 👤 **Perfil Personalizado** - Escolha seu avatar e edite seu nome
- ▶️ **Trailers** - Assista trailers dos filmes diretamente no YouTube
- 📱 **Design Responsivo** - Interface adaptada para mobile, tablet e desktop
- 🎨 **UI Moderna** - Animações suaves, hover effects e scroll horizontal

## 🎥 Demonstração do Netflix Clone


https://github.com/user-attachments/assets/2c157f5c-08e0-4b9a-a200-44ebe34a5535



## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para construção da UI
- **Vite** - Build tool rápida
- **React Router DOM** - Navegação entre páginas
- **Axios** - Requisições HTTP
- **TMDB API** - Banco de dados de filmes e séries
- **CSS3** - Estilização com animações e responsividade

## 📁 Estrutura do Projeto

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
├── index.html
├── package.json
├── vite.config.js
└── README.md


## 📦 Instalação
1. **Clone o repositório**
```bash
git clone https://github.com/edufl/netflix-clone.git
cd netflix-clone
npm install
npm run dev

3. **Configure a API Key do TMDB**

Acesse TMDB e crie uma conta

Vá em Configurações > API e solicite uma chave

Cole sua chave no arquivo src/services/api.js:

javascript
const API_KEY = 'sua_chave_aqui';

4. **Inicie o projeto**
bash
npm run dev
```
## 👨‍💻 Autor
Edufl
