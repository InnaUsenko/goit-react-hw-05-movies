import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Home />} />
        <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route
          path="/goit-react-hw-05-movies/movies/:movieId"
          element={<MovieDetails />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
