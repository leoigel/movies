import React from 'react';
import {
  Container as ContainerMaterialIU,
  TextField as TextFieldMaterialUI,
} from '@material-ui/core';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import CreatePopularyMovies from './CreatePopularyMovies';
import useMovies from '../hooks/useMovies';
import Menu from './Menu';
import Cards from './Cards';
import ContainerFilter from './ContainerFilter';
import InfiniteLoading from './InfiniteLoading';

const Home = () => {
  const { valueInput, dataMovie, setValueInput } = useMovies();
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
            onChange={(e) => {
              setValueInput(e.target.value);
            }}
            value={valueInput}
          />
        </ContainerOfInputSearch>
        <CreatePopularyMovies />
        <Cards data={dataMovie} />
        <InfiniteLoading />
      </Container>
    </>
  );
};

export default Home;

const Container = styled(ContainerMaterialIU)`
  margin-top: 93px;
`;
const ContainerOfInputSearch = styled.div`
  display: flex;
`;
const TextField = styled(TextFieldMaterialUI)`
  flex-grow: 2;
`;
