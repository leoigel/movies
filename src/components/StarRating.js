import React, { useState } from 'react';
import useMovies from '../hooks/useMovies';

const Star = ({ marked, id }) => {
  return (
    <span
      starid={id}
      role="button"
      style={{ color: '#ff9933', cursor: 'pointer' }}
    >
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

const StartRating = () => {
  const [selection, setSelection] = useState(0);
  const [rating, setRating] = useState(0);
  const { setStars } = useMovies();
  let starArray = [];
  const handleMouseOver = (e) => {
    let starid = parseInt(e.target.getAttribute('starid'));
    setSelection(starid);
    Array.from({ length: starid }, (v, i) => {
      starArray.push('\u2605');
      setStars(starArray);
    });
  };
  return (
    <div
      onMouseOver={handleMouseOver}
      onClick={(e) => {
        setRating(e.target.getAttribute('starid'));
      }}
    >
      {Array.from({ length: 5 }, (v, i) => {
        return (
          <Star
            marked={selection ? selection > i : rating > i}
            id={i + 1}
            key={i}
          />
        );
      })}
    </div>
  );
};

export { StartRating, Star };
