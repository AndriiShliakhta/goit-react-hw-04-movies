import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=9f076a639a51530d619fabd99f65fd8f`,
      )
      .then(response => setReviews(response.data.results))
      .catch(e => {
        console.log(e);
      });
  }, [id]);

  return (
    <>
      {reviews &&
        reviews.map(review => {
          return (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          );
        })}
    </>
  );
};

export default Reviews;
