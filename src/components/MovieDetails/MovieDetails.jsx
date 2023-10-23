import { Link, Outlet, useParams } from 'react-router-dom';
import { getDetails } from '../../services/api';
import { useState, useEffect } from 'react';

export const MovieDetails = props => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [movieId]);
  return (
    <main>
      {movie && (
        <div>
          <img
            src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
            alt="poster_path"
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {Number.parseFloat(movie.vote_average) * 10}%</p>
            <h2>Overwiev</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>
              {movie.genres.map(el => {
                return <span key={el.id}>{el.name}</span>;
              })}
            </p>
          </div>
        </div>
      )}

      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Read about cast</Link>
          </li>
          <li>
            <Link to="reviews">Read about reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
