import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import './SearchResults.css';

function SearchResults({ onMovieClick }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchMovies = async () => {
      if (!query) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const response = await api.get('/search/multi', {
          params: {
            query: query,
            include_adult: false
          }
        });
        setResults(response.data.results.filter(item => item.media_type !== 'person'));
      } catch (err) {
        setError('Erro ao buscar resultados');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    searchMovies();
  }, [query]);

  if (loading) {
    return (
      <div className="search-results">
        <h2>Resultados para: "{query}"</h2>
        <div className="results-loading">Buscando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="search-results">
        <h2>Resultados para: "{query}"</h2>
        <div className="results-error">{error}</div>
      </div>
    );
  }

  if (results.length === 0 && query) {
    return (
      <div className="search-results">
        <h2>Resultados para: "{query}"</h2>
        <div className="results-empty">
          Nenhum resultado encontrado para "{query}"
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      <h2>Resultados para: "{query}"</h2>
      <div className="results-grid">
        {results.map((item) => (
          <div 
            key={item.id} 
            className="result-card"
            onClick={() => onMovieClick(item)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path || item.backdrop_path}`}
              alt={item.title || item.name}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x450?text=Sem+Imagem';
              }}
            />
            <div className="result-info">
              <h3>{item.title || item.name}</h3>
              <span>⭐ {item.vote_average?.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;