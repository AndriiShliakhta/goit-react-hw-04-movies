import axios from 'axios';
import React from 'react';
import { NavLink, withRouter, Route } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import Cast from './Cast/Cast';
import Reviews from './Reviews';
import { mainRoutes } from '../../routes/mainRoutes';
import { itemDetails, itemDetailsImage } from './movieDetailsPage.module.css';

const MovieDetailsPage = ({ match, history, location, movieSearchWord }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [moviePoster, setMoviePoster, itemDetailsInfo] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${match.params.movieId}?api_key=9f076a639a51530d619fabd99f65fd8f`,
      )
      .then(response => {
        response.data && setMovieDetails(response.data);
        response.data.poster_path &&
          setMoviePoster(
            `https://image.tmdb.org/t/p/w500${response.data.poster_path}`,
          );
      })
      .catch(e => {
        console.log(e);
      });
  }, [match.params.movieId, setMoviePoster]);

  return (
    <>
      {movieDetails && (
        <>
          <button
            type="button"
            onClick={() => {
              if (!location.state && !movieSearchWord) {
                movieSearchWord = null;
                return history.push(`${mainRoutes[0].path}`);
              } else {
                return history.push(`/movies?query=${movieSearchWord}`);
              }
            }}
          >
            &#129044; Go back
          </button>
          <div className={itemDetails}>
            <div className={itemDetailsImage}>
              <img src={moviePoster} alt="Poster" />
            </div>

            <div className={itemDetailsInfo}>
              <h2>
                {movieDetails.title || movieDetails.name}{' '}
                {`(${
                  movieDetails.release_date?.slice(0, 4) ||
                  movieDetails.first_air_date?.slice(0, 4)
                })`}
              </h2>
              <p>{`User Score: ${movieDetails.vote_average * 10}%`}</p>
              <h3>{`Overview `}</h3>
              <p>{movieDetails.overview}</p>
              <h4>Genres</h4>
              <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <div>
            <h4>Additional informationn</h4>
            <ul>
              <li>
                <NavLink to={`${match.url}/cast`} exact>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to={`${match.url}/reviews`} exact>
                  Reviews
                </NavLink>
              </li>
            </ul>
            <hr />
            <Route
              path={`${match.url}/cast`}
              exact
              render={props => <Cast {...props} id={match.params.movieId} />}
              key={`${match.url}/cast`}
            />
            <Route
              path={`${match.url}/reviews`}
              exact
              render={props => <Reviews {...props} id={match.params.movieId} />}
              key={`${match.url}/reviews`}
            />
          </div>
        </>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);
