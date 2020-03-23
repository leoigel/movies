import React from 'react';
import { Pagination } from '@material-ui/lab';
import { Container as ConteinerMaterialUI} from '@material-ui/core';
import styled from 'styled-components';
import useMovies from '../hooks/useMovies';

const Pages = () => {
    const {pagination,dataMovie } = useMovies();
    const {total_results} = dataMovie;
    return (
        <>
        <Container>
        <Pagination count={total_results}  onChange={(e) => pagination(parseInt(e.target.textContent))} />
        </Container>
        </>
    )
}

export default Pages;

const Container = styled(ConteinerMaterialUI)`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin-top:30px;
`