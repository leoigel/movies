import React from 'react';
import styled from 'styled-components';
import useMovies from '../hooks/useMovies';
import { ImgCastNotFound } from '../ui/MovieCardUI';
import TrailerCard from './TrailerCard';
import InfoRating from './InfoRating';

const ModalInfo = ({ info }) => {
  const { windowDimensions, stars } = useMovies();
  const { width } = windowDimensions;
  return (
    <MainContent>
      <DivModal>
        <img
          src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`}
          style={{ width: '100%', height: '100%' }}
          alt="modal"
        />
        <Modal width={width}>
          <Details width={width}>
            <ImgDiv width={width}>
              {info.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w92${info.poster_path}`}
                  style={{ borderRadius: '5px', border: '1px solid #ffffff' }}
                  alt="modal-info"
                />
              ) : (
                <ImgCastNotFound />
              )}
            </ImgDiv>
            <div>
              <H5>Release Date: {info.release_date}</H5>
              <H5>Revenue: {info.revenue} $ </H5>
              <H5>Budget: {info.budget} $</H5>
              <H5>Popularity: {info.popularity}</H5>
            </div>
          </Details>
          <Overview width={width}>
            <h1>{info.original_title}</h1>
            <InfoRating stars={stars} />
            <p>{info.overview}</p>
            {info.videos && (
              <TrailerCard movie_video={info.videos.results[0]} />
            )}
          </Overview>
        </Modal>
      </DivModal>
    </MainContent>
  );
};

export default ModalInfo;

const MainContent = styled.div`
  width: 100%;
`;

const DivModal = styled.div`
  position: relative;
  min-height: 800px;
  height: 100vh;
`;
const Modal = styled.div`
color: white;
position: absolute;
top: 50%;
left: 50%;
transform: ${(props) => {
  return props.width > 600
    ? 'translate(-50%, -50%);'
    : 'translate(-50%, -40%);';
}};
font-family: "Fira Sans", sans-serif;
font-size:${(props) => {
  return props.width > 800 ? '16px' : '14px';
}};
line-height: 1.2;
background: rgba(56, 56, 56, 0.89);
border-radius: 10px;
box-sizing: border-box;
padding:13px;
display:flex;
flex-direction:${(props) => {
  return props.width > 600 ? 'row' : 'column';
}};  
}};
min-width:300px;
`;
const Details = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: ${(props) => {
    return props.width > 600 ? 'column' : 'row';
  }};
  align-items: center;
  order: ${(props) => {
    return props.width > 600 ? '0' : '1';
  }};
  justify-content: space-around;
`;
const ImgDiv = styled.div`
  border-radius: 4px;
  padding: 0px;
`;
const H5 = styled.h5`
  padding: 10px;
  margin: 0px;
  align-self: flex-start;
  font-size: 13px;
`;
const Overview = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  order: ${(props) => {
    return props.width > 900 ? '1' : '0';
  }};
`;
