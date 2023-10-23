import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/api';

export const Cast = props => {
  const { movieId } = useParams();
  const [theCast, setTheCast] = useState([]);

  useEffect(() => {
    getCast(movieId)
      .then(data => {
        setTheCast(data.cast);
      })
      .catch(err => {
        console.log(err);
      });
  }, [movieId]);

  return (
    <div>
      <h2>CAST {movieId} is here</h2>
      <ul>
        {theCast.map(el => {
          return (
            <li key={el.id}>
              <img
                src={'https://image.tmdb.org/t/p/w200/' + el.profile_path}
                alt=""
              />
              {el.name} AS {el.character}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
