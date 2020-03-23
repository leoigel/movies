import React from 'react';
import useMovies from '../hooks/useMovies';
import {
    Container,
    CardsContainer,
    ConteinerContent,
    ContainerInformation,
    Info,
    ContainerDetails,
    Date,
    Overview,
    MoreInfo,
    Divider,
    ImgContainer,
    ImgNotFound,
    Title,
    VoteAverage
} from '../ui/MovieCardUI';
import resumeOverView from '../utlits/resumeOverView';
import moment from 'moment';
const Cards = ({data}) => {
     const {windowDimensions } = useMovies();
    const { width } = windowDimensions;
    return (
        <>
            <Container width={width}>
                {Object.keys(data).length !== 0 && (
                    data.results.map((card, index) => {
                        return (
                            <CardsContainer key={index} width={width}>
                                <ConteinerContent>
                                    <ImgContainer>
                                        {card.poster_path ? <img style={{ display: 'block', height: '278px',width:'200px',minWidth:'100%' }} src={`${`https://image.tmdb.org/t/p/original/${card.poster_path}`}`} /> : <ImgNotFound />}
                                    </ImgContainer>
                                    <ContainerInformation>
                                        <ContainerDetails>
                                            <VoteAverage>{card.vote_average}</VoteAverage>
                                            <div>
                                                <Title>{card.title}</Title>
                                                <Date>{`${moment(card.release_date).format('LL')}`}</Date>
                                            </div>
                                        </ContainerDetails>
                                        <Overview>{resumeOverView(card.overview)}</Overview>
                                        <Info>
                                            <Divider />
                                            <MoreInfo>More Info</MoreInfo>
                                        </Info>
                                    </ContainerInformation>
                                </ConteinerContent>
                            </CardsContainer>
                        )
                    }
                    ))}
            </Container>
        </>
    )
}

export default Cards;

