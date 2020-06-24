import React from 'react';
import {
  ImgVerticalNotfound,
  CardsContainer,
  Size,
  Container,
  DivDetails,
  Title,
  ReleaseDate,
  Paragraph,
} from '../ui/StyleCategory';
import { withRouter, Redirect } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import getCategory from '../utlits/getCategory';
import MovingForm from './MovingForm';
import { H1 } from '../ui/ButtonFilter';
import '../css/style.css';
const PersonCard = ({ match }) => {
  const { searchDataMovie, windowDimensions } = useMovies();
  const { width } = windowDimensions;
  const personCategory = getCategory(searchDataMovie, match.params.category);
  if (!personCategory) {
    return <Redirect to="/" />;
  }
  const { person } = personCategory;
  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <Container>
        {width >= 630 && <MovingForm />}
        <div style={{ flexGrow: '3' }}>
          {person && person.length !== 0 ? (
            person.map((person, index) => {
              return person.known_for.map((personKnown_for, index) => {
                return (
                  <Size key={index}>
                    <CardsContainer>
                      {personKnown_for.poster_path ? (
                        <img
                          src={`${`https://image.tmdb.org/t/p/w92/${personKnown_for.poster_path}`}`}
                          alt="movie-card"
                        />
                      ) : (
                        <ImgVerticalNotfound />
                      )}
                      <DivDetails>
                        <div>
                          <Title>{personKnown_for.title}</Title>
                          <ReleaseDate>
                            {personKnown_for.release_date}
                          </ReleaseDate>
                        </div>
                        <Paragraph>{personKnown_for.overview}</Paragraph>
                      </DivDetails>
                    </CardsContainer>
                  </Size>
                );
              });
            })
          ) : (
            <H1>This content is not available</H1>
          )}
        </div>
      </Container>
    </div>
  );
};

export default withRouter(PersonCard);
