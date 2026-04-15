import React, { useState, useEffect } from 'react';
import api from '../services/api';
import MovieModal from './MovieModal';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null); // Novo estado

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const request = await api.get(fetchUrl);
        setMovies(request.data.results);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar filmes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [fetchUrl]);

  if (loading) {
    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row-loading">Carregando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row-error">{error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row-posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row-poster ${isLargeRow && 'row-poster-large'}`}
              src={`https://image.tmdb.org/t/p/original${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title}
              onClick={() => setSelectedMovie(movie)} // Adiciona clique
              style={{ cursor: 'pointer' }} // Adiciona cursor pointer
            />
          ))}
        </div>
      </div>
      
      {/* Modal do filme */}
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </>
  );
}

export default Row;