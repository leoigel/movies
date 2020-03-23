import React from 'react';
import { ImgVerticalNotfound, Container, CardsContainer } from '../ui/MovieCardUI';
import { Container as ContainerMaterialIU } from '@material-ui/core';
import styled from 'styled-components';
import useMovies from '../hooks/useMovies';
const CompanyCard = ({ company }) => {
    const { results } = company;
    return (

        <Div>
            <Container>
                {
                    results.map((companyCard,index) => {
                        return (
                            <Size key={index}>
                                <CardsContainer>
                                    <ContainerImg>
                                        {companyCard.logo_path ? <img src={`${`https://image.tmdb.org/t/p/w185/${companyCard.logo_path}`}`} /> : <ImgVerticalNotfound />}
                                        <h3>{companyCard.name}</h3>
                                    </ContainerImg>
                                </CardsContainer>
                            </Size>
                        )
                    })
                }
            </Container>
        </Div>
    )
}

export default CompanyCard;

const ContainerImg = styled(ContainerMaterialIU)`
display:flex;
flex-direction:column;
`
const Div = styled.div`
display:flex;
flex-wrap:wrap;
`
const Size = styled.div`
width:300px;
`
