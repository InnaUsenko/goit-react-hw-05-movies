import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = props => {
  return (
    <main>
      <ul
        style={{
          display: 'flex',
          gap: 24,
          listStyle: 'none',
        }}
      >
        <li>
          <Link to="cast">Read about cast</Link>
        </li>
        <li>
          <Link to="reviews">Read about reviews</Link>
        </li>
      </ul>

      <h2>MovieDetails place is here</h2>
      <Outlet />
    </main>
  );
};
