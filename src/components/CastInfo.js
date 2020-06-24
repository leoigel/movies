import React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import { ImgCastNotFound } from '../ui/MovieCardUI';
const CastInfo = ({ info }) => {
  return (
    <MainCast>
      <Container>
        <h1>Cast</h1>
        <CastConteiner>
          {info.credits &&
            info.credits.cast.map((cast, index) => {
              {
                return (
                  <CardCast key={index}>
                    {cast.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w92/${cast.profile_path}`}
                        style={{ borderRadius: '3px 3px 0px 0px' }}
                        alt="castInfo"
                      />
                    ) : (
                      <ImgCastNotFound />
                    )}
                    <H5>{cast.name}</H5>
                  </CardCast>
                );
              }
            })}
        </CastConteiner>
      </Container>
    </MainCast>
  );
};
export default CastInfo;

const MainCast = styled.div``;
const CastConteiner = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
`;
const CardCast = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.8);
  margin-left: 11px;
  border-radius: 3px 3px 0px 0px;
`;
const H5 = styled.h5`
  padding: 10px;
  margin: 0px;
  align-self: flex-start;
`;
