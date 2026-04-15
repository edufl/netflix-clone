import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import MyList from './components/MyList';
import SearchResults from './components/SearchResults';
import MovieModal from './components/MovieModal';
import { requests } from './services/api';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Row 
                title="NETFLIX ORIGINAIS" 
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
              />
              <Row title="Em Alta" fetchUrl={requests.fetchTrending} />
              <Row title="Mais Votados" fetchUrl={requests.fetchTopRated} />
              <Row title="Ação" fetchUrl={requests.fetchActionMovies} />
              <Row title="Comédia" fetchUrl={requests.fetchComedyMovies} />
              <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} />
              <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
              <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />
            </>
          } />
          <Route path="/mylist" element={
            <MyList onMovieClick={setSelectedMovie} />
          } />
          <Route path="/search" element={
            <SearchResults onMovieClick={setSelectedMovie} />
          } />
        </Routes>
        
        {selectedMovie && (
          <MovieModal 
            movie={selectedMovie} 
            onClose={() => setSelectedMovie(null)} 
          />
        )}
      </div>
    </Router>
  );
}

export default App;