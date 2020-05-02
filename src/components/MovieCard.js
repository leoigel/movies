import React from 'react';
import { withRouter } from 'react-router-dom'
import { ImgVerticalNotfound, CardsContainer, Size, Container, DivDetails, Paragraph, ReleaseDate, Title } from '../ui/StyleCategory';
import {H1} from '../ui/ButtonFilter';

import useMovies from '../hooks/useMovies';

import MovingForm from './MovingForm';
import '../css/style.css';


const MovieCard = ({ match,location }) => {
    const { getMovie,windowDimensions } = useMovies();
    const { width } = windowDimensions;
    const { results: movie } = getMovie;
    return (

        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center'}}>

            <Container>
               {width >= 630 && <MovingForm />}
                <div style={{ flexGrow: '3',paddingLeft:'20px'}}  >
                    {
                        movie && movie.length !== 0 ? (
                            movie.map((movieCard, index) => {
                                return (
                                    <>

                                        <Size key={index}>
                                            <CardsContainer>
                                                {movieCard.poster_path ? <img src={`${`https://image.tmdb.org/t/p/w92/${movieCard.poster_path}`}`} alt='movie-card' /> : <ImgVerticalNotfound />}
                                                <DivDetails>
                                                    <div>
                                                    <Title>{movieCard.title}</Title>
                                                    <ReleaseDate>{movieCard.release_date}</ReleaseDate>
                                                    </div>
                                                    <Paragraph>{movieCard.overview}</Paragraph>
                                                </DivDetails>
                                            </CardsContainer>
                                        </Size>
                                    </>
                                )
                            })
                        ) : <H1>This content is not available</H1>
                    }
                </div>
            </Container>

        </div>
    )
}


export default withRouter(MovieCard);




