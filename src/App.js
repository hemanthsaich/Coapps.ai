import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(response => {
        setFilms(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Star Wars Films</h1>
      <ul>
        {films.map(film => (
          <li key={film.episode_id}>
            <h2>{film.title}</h2>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
            <p>Release Date: {film.release_date}</p>
            <p>Opening Crawl: {film.opening_crawl}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
