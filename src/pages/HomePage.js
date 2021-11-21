import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const HomePage = ({ movies }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies?.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title || movie.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default withRouter(HomePage);
