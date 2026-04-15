import React, { useState, useEffect } from 'react';
import './MyList.css';

function MyList({ onMovieClick }) {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    loadMyList();
  }, []);

  const loadMyList = () => {
    const list = JSON.parse(localStorage.getItem('myNetflixList') || '[]');
    setMyList(list);
  };

  if (myList.length === 0) {
    return (
      <div className="mylist-empty">
        <h2>Minha Lista</h2>
        <p>Sua lista está vazia. Adicione filmes e séries clicando em "+ Minha Lista" nos detalhes!</p>
      </div>
    );
  }

  return (
    <div className="mylist">
      <h2>Minha Lista</h2>
      <div className="mylist-grid">
        {myList.map((item) => (
          <div 
            key={item.id} 
            className="mylist-item"
            onClick={() => onMovieClick(item)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster}`}
              alt={item.title}
            />
            <div className="mylist-item-info">
              <h3>{item.title}</h3>
              <span>⭐ {item.vote_average?.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyList;