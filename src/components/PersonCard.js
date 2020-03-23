import React from 'react';
import { CardsContainer as CardsContainerPerson, ImgVerticalNotfound as ImgVerticalNotfoundPerson } from '../ui/MovieCardUI';
import { Container } from '../ui/MovieCardUI';
import useMovies from '../hooks/useMovies';
import styled from 'styled-components';
// import { CircularProgress } from '@material-ui/core';
const PersonCard = ({ person }) => {
    const { results } = person;
    {/* <p>{personCard.known_for[0].original_title}</p> */ }
    return (

        <>
            <Container>
                {results.map((personCard, index) => {
                    return (
                        <Size key={index}>
                            <CardsContainer>
                                <ContentPerson>
                                    {personCard.profile_path ? <img src={`${`https://image.tmdb.org/t/p/w45/${personCard.profile_path}`}`} /> : <ImgVerticalNotfound />}
                                    <H1>{personCard.name}</H1>
                                    <H2>{personCard.known_for_department}</H2>
                                </ContentPerson>
                            </CardsContainer>
                        </Size>
                    )
                })
                }
            </Container>
        </>
    )
}

export default PersonCard;

const ContentPerson = styled.div`
display:flex;
`
const Size = styled.div`
width:100%;
`
const ImgVerticalNotfound = styled(ImgVerticalNotfoundPerson)`
width:45px;
height:68px;
`
const CardsContainer = styled(CardsContainerPerson)`
height:68px;
`
const H1 = styled.h1`
font-size:1.4em;
font-weight: 600;
`
const H2 = styled.h2`
font-size:1em;
font-weight: 400;
`