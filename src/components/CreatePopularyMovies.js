import React from 'react';
import useMovies from '../hooks/useMovies';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import { Container as ContainerMaterialUI, Divider, ListItem as ListItemMaterialUI, List as ListMatetialUI, ListItemText} from '@material-ui/core';
const CreatePopularyMovies = () => {
    const { listMovies, valueInput } = useMovies();
  
    return (
        <>
            {listMovies.length !== 0 && valueInput && (
                <ContainerOfTable>
                    {listMovies && (
                        listMovies.map((movie,index) => {
                            return (
                                <>
                                    <List key={index}>
                                        <ListItem button to={{pathname: `/search/movie`,
                                                            state: movie.title}}>
                                            <Container>
                                                <SearchIcon />
                                                    <ListItemText  primary={movie.title} />
                                            </Container>
                                        </ListItem>
                                    </List>
                                    <Divider />
                                </>
                            )
                        })
                    )}
                </ContainerOfTable>
            )}
        </>
    )
}



export default withRouter(CreatePopularyMovies);

const Container = styled(ContainerMaterialUI)`
display:flex;
align-items:center;
`
const List = styled(ListMatetialUI)`
padding:0px;
margin:0px;
`

const ContainerOfTable = styled.div`
max-height:20vw;
overflow:hidden;
`
const ListItem = styled(ListItemMaterialUI).attrs({
    component: Link
})``