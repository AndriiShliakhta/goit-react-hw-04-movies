import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const Cast = ({ id }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9f076a639a51530d619fabd99f65fd8f`,
      )
      .then(response => setCast(response.data.cast))
      .catch(e => {
        console.log(e);
      });
  }, [id]);
  return (
    <>
      {cast &&
        cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={actor.name}
                width="100"
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          );
        })}
    </>
  );
};

export default Cast;
