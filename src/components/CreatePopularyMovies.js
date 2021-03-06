import React from 'react';
import useMovies from '../hooks/useMovies';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import {
  Container as ContainerMaterialUI,
  Divider,
  ListItem as ListItemMaterialUI,
  ListItemText,
} from '@material-ui/core';
const CreatePopularyMovies = ({ location, match, history }) => {
  const { valueInput, querys, setValueInput } = useMovies();
  return (
    <>
      {querys.length !== 0 && valueInput && (
        <ContainerOfTable>
          {querys &&
            querys.map((movie, index) => {
              return (
                <div key={index}>
                  <ListItem
                    button
                    to={{
                      pathname: `/search/movie`,
                      state: movie.title,
                    }}
                    onClick={() => setValueInput('')}
                  >
                    <Container>
                      <SearchIcon />
                      <ListItemText primary={movie.title} />
                    </Container>
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
        </ContainerOfTable>
      )}
    </>
  );
};

export default withRouter(CreatePopularyMovies);

const Container = styled(ContainerMaterialUI)`
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 1px;
`;

const ContainerOfTable = styled.div`
  margin: 10px;
`;
const ListItem = styled(ListItemMaterialUI).attrs({
  component: Link,
})`
  padding: 0px;
  margin: 0px;
`;
