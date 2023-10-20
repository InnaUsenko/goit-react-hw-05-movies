import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

const APP_PATH = '/goit-react-hw-05-movies';
export const App = () => {
  return (
    <div>
      <nav>
        <Link to={`${APP_PATH}/`} style={{ marginRight: 24 }}>
          Home
        </Link>
        <Link to={`${APP_PATH}/movies`} style={{ marginRight: 24 }}>
          Movies
        </Link>
      </nav>
      <Routes>
        <Route path={`${APP_PATH}/`} element={<Home />} />
        <Route path={`${APP_PATH}/movies`} element={<Movies />} />
        <Route path={`${APP_PATH}/movies/:movieId`} element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
