import React from 'react';
import { Container as ContainerMaterialIU, TextField as TextFieldMaterialUI } from '@material-ui/core';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import CreatePopularyMovies from './CreatePopularyMovies';
import useMovies from '../hooks/useMovies';
import Menu from './Menu';
import Pages from './Pages';
import Cards from './Cards';
import ContainerFilter from './ContainerFilter';

const Home = ({location,match}) => {
    const { filterMoviesSearch, valueInput,dataMovie, windowDimensions  } = useMovies();
    // console.log(location)
    return (
        <>
            <Menu />
            <Container>
                <ContainerFilter />
                <ContainerOfInputSearch>
                    <SearchIcon />
                    <TextField
                        variant="standard"
                        placeholder="Seach Movie"
                        fullWidth
                        onChange={(e) => filterMoviesSearch(e.target.value)}
                        value={valueInput}
                    />
                </ContainerOfInputSearch>

                <CreatePopularyMovies />
                <Cards data={dataMovie}/>
                <Pages />
            </Container>
        </>
    )
}

export default Home;

const Container = styled(ContainerMaterialIU)`
margin-top:93px;
`
const ContainerOfInputSearch = styled.div`
display:flex;
// padding-top:30px;
`
const TextField = styled(TextFieldMaterialUI)`
flex-grow:2
`
