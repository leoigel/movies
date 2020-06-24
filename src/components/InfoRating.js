import React from 'react';
import styled from 'styled-components';

const InfoRating = ({ stars }) => {
  return (
    <StarConteiner>
      {stars.map((star, index) => (
        <SpanStar key={index}>{star}</SpanStar>
      ))}
    </StarConteiner>
  );
};

export default InfoRating;
const StarConteiner = styled.div`
  display: flex;
  width: 100%;
`;
const SpanStar = styled.span`
  font-size: 24px;
  color: yellow;
`;
