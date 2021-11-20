import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/moviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/movieDetailsPage/MovieDetailsPage';

const API_REFS = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  KEY: '?api_key=9f076a639a51530d619fabd99f65fd8f',
};
const { BASE_URL, KEY } = API_REFS;

const Content = ({ routes }) => {
  const [movies, setMovies] = useState(null);
  const [movieSearchWord, setMovieSearchWord] = useState(null);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    try {
      const response = await axios.get(`${BASE_URL}trending/all/day${KEY}`);
      setMovies(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  const upMovieSearch = word => {
    setMovieSearchWord(word);
  };

  return (
    <Switch>
      <Route
        path={`${routes[0].path}`}
        exact
        render={props => <HomePage {...props} movies={movies} />}
        key={routes[0].path}
      />
      <Route
        path={`${routes[1].path}/:movieId`}
        // exact
        render={props => (
          <MovieDetailsPage
            {...props}
            movies={movies}
            movieSearchWord={movieSearchWord}
          />
        )}
        key={`${routes[1].path}/:movieId`}
      />
      <Route
        path={routes[1].path}
        exact
        render={props => (
          <MoviesPage upMovieSearch={upMovieSearch} {...props} />
        )}
        key={routes[1].path}
      />

      {/* <Route
        path={`${routes[1].path}?query=${movieSearchWord}`}
        render={props => <MoviesPage />}
        key={`${routes[1].path}?query=${movieSearchWord}`}
      />{' '}
      <Route
        path={`${routes[0].path}/*`}
        render={props => <HomePage {...props} movies={movies} />}
        key={`${routes[0].path}/*`}
      /> */}
    </Switch>
  );
};

export default withRouter(Content);
