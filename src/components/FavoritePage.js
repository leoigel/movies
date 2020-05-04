import React from 'react';
import useMovies from '../hooks/useMovies';
import Menu from './Menu'
import moment from 'moment';
import styled from 'styled-components';
import  GenericFooter from './GenericFooter';
import { H1 } from '../ui/ButtonFilter';
import {
    Container as ContainerTest,
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


} from '../ui/MovieCardUI';
const FavoritePage = () => {
    const {favoritesCards, windowDimensions, setFavoritesCard } = useMovies();
    const { width } = windowDimensions;

    const deleteCard = (id) => {
        const newFavoritesCards =  JSON.parse(localStorage.getItem('cards')).filter(favorites => {
            return favorites.id !== id
        })
        localStorage.setItem('cards',JSON.stringify([...newFavoritesCards]||'[]'))
        setFavoritesCard([...newFavoritesCards]);
        
    }

    return (
        <>
            <Menu />
            <HoldConteiner>
                <Container width={width}>
                    {JSON.parse(localStorage.getItem('cards')) && JSON.parse(localStorage.getItem('cards')).length > 0   ?(
                        JSON.parse(localStorage.getItem('cards')).map((card, index) => {
                            return (
                                <CardsContainer key={card.id} width={width}>
                                    <ImgContainer>
                                        {card.backdrop_path ? <img style={{ display: 'block', height: '274px', width: '100%', minWidth: '100%', borderRadius: '10px 10px 0px 0px',objectFit:'cover' }} src={`${`https://image.tmdb.org/t/p/original/${card.backdrop_path}`}`} alt='card-img' /> : <ImgNotFound />}
                                        <DeleteIcon className="far fa-trash-alt" onClick={() => deleteCard(card.id)}></DeleteIcon>
                                    </ImgContainer>
                                    <ContainerInformation>
                                        <ContainerDetails>
                                            <VoteAverage>{card.vote_average}<Percent>%</Percent></VoteAverage>
                                            <Div>
                                                <Date>{`${moment(card.release_date).format('LL')}`}</Date>
                                                <Title>{card.title}</Title>
                                            </Div>
                                        </ContainerDetails>
                                    </ContainerInformation>
                                </CardsContainer>
                            )
                        })
                    ) : <H1>There aren't favorites cards yet</H1>}
                </Container>
            </HoldConteiner>
            <GenericFooter />
        </>
    )
}

export default FavoritePage;

const HoldConteiner = styled.div`
margin-top:120px;
`
const Container = styled(ContainerTest)`
max-width:960px;
margin:0 auto;
`
const DeleteIcon = styled.i`
position:absolute;
top:9px;
right:15px;
font-size:25px;
cursor:pointer;
color:#ff6666;
&:hover {
    color:gray;
}

`