import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu';
import handleParams from '../utlits/handleParams';
import CenteredTabs from './CenteredTabs';
import { Container as ContainerMaterialIU } from '@material-ui/core';
import useMovies from '../hooks/useMovies';
const Search = ({ location, match }) => {
    const [searchDataMovie, setSearchDataMovie] = useState({})
    const [category, setCategory] = useState(location.state);
    const [validateSearch, setValidateSearch] = useState(true)
    useEffect(() => {
        async function generateCategory() {
            const query = await fetch(`https://api.themoviedb.org/3/search/${match.params.category}?api_key=d98ee9811e179187b61f0f6b83bb3918&query=${category}`);
            const responseQuery = await query.json();
            setSearchDataMovie((searchDataMovie) => {
                return {
                    ...searchDataMovie,
                    results: responseQuery.results,
                }
            })
        }
        generateCategory()
    }, [match.params.category])
    return (
        <>
            <Menu />
            <Container>
                <CenteredTabs category={category} dataMovie={searchDataMovie} params={match.params.category}/>
                <ContentSearch>
                    {handleParams(match.params.category, searchDataMovie)}
                </ContentSearch>
            </Container>

        </>
    )
}


export default Search;


const Container = styled(ContainerMaterialIU)`
margin-top:93px;
display:flex;
flex-wrap:wrap;
`
const ContainerList = styled.div`
width:100%;
`
const ContentSearch = styled.div`
// min-width:800px;
`
const UL = styled.ul`
display: block;
list-style-type: disc;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 40px;

`
const Li = styled.li`
display: block;
width: 210px;
border-bottom: 2px solid #000;
padding: 12px 0 12px 0;
box-sizing: border-box;
font-weight: 600;
`

{/* <ContainerList>
                    <UL>
                        <Li >
                            <Link to={`/search/movie?query=${category}`}>Movie</Link>
                        </Li>
                        <Li >
                            <Link to={`/search/tv?query=${category}`}>Tv</Link>
                        </Li>
                        <Li >
                            <Link to={`/search/person?query=${category}`}>Person</Link>
                        </Li>
                        <Li >
                            <Link to={`/search/company?query=${category}`}>Companies</Link>
                        </Li>
                        <Li >
                            <Link to={`/search/keyword?query=${category}`}>Keyword</Link>
                        </Li>
                    </UL>

                </ContainerList> */}