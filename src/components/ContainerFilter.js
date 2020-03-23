import React from 'react';
import styled from 'styled-components';
import { Container as ConteinerFilterMaterialUI } from '@material-ui/core';
import Years from './Years';
import Genres from './Genres';
import SortBy from './SortBy';
const ContainerFilter = () => {
    return (
        <Container>
            <Years />
            <SortBy />
            <Genres />
        </Container>
    )

}

export default ContainerFilter;


const Container = styled(ConteinerFilterMaterialUI)`
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
`
