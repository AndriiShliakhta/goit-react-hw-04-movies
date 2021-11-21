import React from 'react';
import { withRouter, Link } from 'react-router-dom';
const MoviesList = ({ location, foundMovies }) => {
  return (
    <ul>
      {foundMovies?.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(MoviesList);
