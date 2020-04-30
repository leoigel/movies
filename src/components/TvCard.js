import React from 'react';
import { withRouter,Redirect } from 'react-router-dom'
import useMovies from '../hooks/useMovies';
import getCategory from '../utlits/getCategory';
import { ImgVerticalNotfound, CardsContainer, Size, Container, DivDetails, Title, ReleaseDate, Paragraph } from '../ui/StyleCategory';
import MovingForm from './MovingForm';
import {H1} from '../ui/ButtonFilter';

const TvCard = ({ match }) => {
    const { searchDataMovie, windowDimensions } = useMovies();
    const { width } = windowDimensions;
    const tvCategory = getCategory(searchDataMovie, match.params.category);
    if(!tvCategory) {
        return  <Redirect to="/" />
      }
    const { tv } = tvCategory;  
    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <Container>
                {width >= 630 && <MovingForm />}
                <div style={{ flexGrow: '3' }}>
                    {
                        tv && tv.length !== 0 ? (
                            tv.map((tvCard, index) => {
                                return (

                                    <Size key={index}>
                                        <CardsContainer>
                                            {tvCard.poster_path ? <img src={`${`https://image.tmdb.org/t/p/w92/${tvCard.poster_path}`}`} alt='movie-card' /> : <ImgVerticalNotfound />}
                                            <DivDetails>
                                                <div>
                                                    <Title>{tvCard.title}</Title>
                                                    <ReleaseDate>{tvCard.release_date}</ReleaseDate>
                                                </div>
                                                <Paragraph>{tvCard.overview}</Paragraph>
                                            </DivDetails>
                                        </CardsContainer>
                                    </Size>
                                )
                            })
                        ) : <H1>This content is not available</H1>
                    }
                </div>
            </Container>
        </div>


    )
}


export default withRouter(TvCard);
