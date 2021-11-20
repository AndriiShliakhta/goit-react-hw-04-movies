import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import MoviesList from './MoviesList';
import queryString from 'query-string';

const MoviesPage = ({ history, location, upMovieSearch }) => {
  // `search/movie?api_key=${apiKey}&query=${searchQuery}&page=${currentPage}&language=en-US`,
  const [foundMovies, setFoundMovies] = useState(null);
  const [movieSearch, setMovieSearch] = useState('');

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    // if (location.search) {
    //   // setMovieSearch(location.search.split('=')[1]);
    //   searchMovie(location.search);
    // }
    // console.log(parsed);

    if (parsed.query) searchMovie(parsed.query);
    // if (!movieSearch) {
    //   return;
    // }
  }, [location.search]);

  const searchMovie = async movie => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=9f076a639a51530d619fabd99f65fd8f&query=${movie}`,
      );
      setFoundMovies(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    history.push({
      pathname: history.location.pathname,
      search: `query=${movieSearch}`,
    });
    searchMovie(movieSearch);
    upMovieSearch(movieSearch);
  };

  const onHandleChange = e => {
    setMovieSearch(e.target.value);
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <label>
          <input type="text" onChange={onHandleChange} value={movieSearch} />
        </label>
        <button type="submit">Search</button>
      </form>
      {/* {foundMovies && ( */}
      <MoviesList foundMovies={foundMovies} movieSearch={movieSearch} />
      {/* )} */}
    </>
  );
};

export default withRouter(MoviesPage);
