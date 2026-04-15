import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './MovieModal.css';

function MovieModal({ movie, onClose }) {
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [isInMyList, setIsInMyList] = useState(false);
  const [loadingTrailer, setLoadingTrailer] = useState(false);

  // Verificar se o filme está na Minha Lista ao abrir o modal
  useEffect(() => {
    const myList = JSON.parse(localStorage.getItem('myNetflixList') || '[]');
    const exists = myList.some(item => item.id === movie.id);
    setIsInMyList(exists);
  }, [movie]);

  // Buscar trailer do filme
  useEffect(() => {
    const fetchTrailer = async () => {
      if (!movie) return;
      
      setLoadingTrailer(true);
      try {
        let response;
        // Verifica se é filme ou série
        if (movie.title) {
          response = await api.get(`/movie/${movie.id}/videos`);
        } else if (movie.name) {
          response = await api.get(`/tv/${movie.id}/videos`);
        }
        
        const trailers = response?.data?.results?.filter(
          (video) => video.type === 'Trailer' || video.type === 'Teaser'
        ) || [];
        
        if (trailers.length > 0) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailers[0].key}`);
        }
      } catch (error) {
        console.error('Erro ao carregar trailer:', error);
      } finally {
        setLoadingTrailer(false);
      }
    };
    
    fetchTrailer();
  }, [movie]);

  // Função do botão Play
  const handlePlay = () => {
    if (trailerUrl) {
      window.open(trailerUrl, '_blank');
    } else {
      alert('Trailer não disponível para este título no momento.');
    }
  };

  // Função para adicionar/remover da Minha Lista
  const handleMyList = () => {
    const myList = JSON.parse(localStorage.getItem('myNetflixList') || '[]');
    
    if (isInMyList) {
      // Remover da lista
      const updatedList = myList.filter(item => item.id !== movie.id);
      localStorage.setItem('myNetflixList', JSON.stringify(updatedList));
      setIsInMyList(false);
      alert(`${movie.title || movie.name} removido da Minha Lista!`);
    } else {
      // Adicionar à lista
      const movieData = {
        id: movie.id,
        title: movie.title || movie.name,
        poster: movie.poster_path,
        backdrop: movie.backdrop_path,
        overview: movie.overview,
        vote_average: movie.vote_average,
        date: movie.release_date || movie.first_air_date
      };
      myList.push(movieData);
      localStorage.setItem('myNetflixList', JSON.stringify(myList));
      setIsInMyList(true);
      alert(`${movie.title || movie.name} adicionado à Minha Lista!`);
    }
  };

  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        {loadingTrailer ? (
          <div className="modal-loading">
            <div className="spinner"></div>
            <p>Carregando trailer...</p>
          </div>
        ) : trailerUrl ? (
          <iframe
            width="100%"
            height="400"
            src={trailerUrl}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            className="modal-backdrop"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
            alt={movie.title || movie.name}
          />
        )}
        
        <div className="modal-info">
          <h2>{movie.title || movie.name}</h2>
          
          <div className="modal-details">
            <span>⭐ {movie.vote_average?.toFixed(1)}/10</span>
            <span>📅 {new Date(movie.release_date || movie.first_air_date).getFullYear()}</span>
          </div>
          
          <div className="modal-buttons">
            <button 
              className="modal-play-btn"
              onClick={handlePlay}
            >
              ▶ Play {trailerUrl ? '(Trailer)' : ''}
            </button>
            <button 
              className={`modal-list-btn ${isInMyList ? 'in-list' : ''}`}
              onClick={handleMyList}
            >
              {isInMyList ? '✓ Na Minha Lista' : '+ Minha Lista'}
            </button>
          </div>
          
          <p className="modal-overview">{movie.overview || 'Sinopse não disponível.'}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;