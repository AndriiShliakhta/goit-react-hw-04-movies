import React from 'react';
import { withRouter, Link } from 'react-router-dom';
const MoviesList = ({ location, foundMovies }) => {
  // console.log(foundMovies);
  return (
    <ul>
      {foundMovies?.map(movie => {
        return (
          <li key={movie.id}>
            {/* {console.log(location)} */}

            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: { from: location },
              }}
              // to={`movies/${movie.id}`}
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
