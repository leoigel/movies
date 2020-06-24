import React, { useState, useRef } from 'react';
import useMovies from '../hooks/useMovies';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BoxFavorite from './BoxFavorite';
import '../css/style.css';
import {
  Container,
  CardsContainer,
  ContainerInformation,
  ContainerDetails,
  Date,
  ImgContainer,
  ImgNotFound,
  Title,
  Div,
  VoteAverage,
  Percent,
  Info,
} from '../ui/MovieCardUI';
import moment from 'moment';
import styled from 'styled-components';

const Cards = ({ data }) => {
  const { windowDimensions, setFavoritesCard, newData } = useMovies();
  const { width } = windowDimensions;
  const [open, setOpen] = useState(true);
  const [id, setId] = useState({});
  const favorites = useRef([]);

  const addFavorites = (card) => {
    setOpen(!open);
    return setId({ ...card, open });
  };
  const addCardToFavorite = (card) => {
    favorites.current.push(card);
    favorites.current = favorites.current.filter((elem, index, self) => {
      return index === self.indexOf(elem);
    });
    setFavoritesCard([...favorites.current]);
    localStorage.setItem(
      'cards',
      JSON.stringify([...favorites.current] || '[]')
    );
  };

  return (
    <Container>
      {newData.current &&
        newData.current.map((card, index) => {
          return (
            <CardsContainer width={width}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Info onClick={() => addFavorites(card)}>
                  <MoreHorizIcon />
                </Info>
                {id.id === card.id && id.open ? (
                  <BoxFavorite card={card} />
                ) : null}
              </div>
              <ImgContainer onClick={() => addCardToFavorite(card)}>
                {card.backdrop_path ? (
                  <img
                    style={{
                      display: 'block',
                      height: '274px',
                      width: '20px',
                      minWidth: '100%',
                      borderRadius: '10px 10px 0px 0px',
                      objectFit: 'cover',
                    }}
                    src={`${`https://image.tmdb.org/t/p/original/${card.backdrop_path}`}`}
                    alt="card-img"
                  />
                ) : (
                  <ImgNotFound />
                )}
                <HeartIcon>
                  <i className="fas fa-thumbs-up"></i>
                </HeartIcon>
              </ImgContainer>
              <ContainerInformation>
                <ContainerDetails>
                  <VoteAverage>
                    {card.vote_average}
                    <Percent>%</Percent>
                  </VoteAverage>
                  <Div>
                    <Date>{`${moment(card.release_date).format('LL')}`}</Date>
                    <Title>{card.title}</Title>
                  </Div>
                </ContainerDetails>
              </ContainerInformation>
            </CardsContainer>
          );
        })}
    </Container>
  );
};

export default Cards;

const HeartIcon = styled.i`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  i {
    color: #4c6ef5;
    opacity: 0;
    padding: 30px;
    transition: all 2s;
    &:hover {
      opacity: 0.8;
      transform: scale(1.6);
      color: #4c6ef5;
    }
  }
`;
