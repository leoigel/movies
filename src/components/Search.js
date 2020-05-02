import React, { useEffect, useState,useRef } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import handleParams from '../utlits/handleParams';
import CenteredTabs from './CenteredTabs';
import GenericFooter from './GenericFooter'
import { Container as ContainerMaterialIU } from '@material-ui/core';
import useMovies from '../hooks/useMovies';
import '../css/style.css';

const Search = ({ location, match }) => {
    const { searchDataMovie, setSearchDataMovie, setGetMovie, setCategoryMoving } = useMovies();
    const [category] = useState(location.state);
    const newArray = useRef([]);

    setCategoryMoving(category)
    useEffect(() => {
        async function generateCategory() {

            const urls = ['movie', 'tv', 'person', 'company', 'keyword'];
            Promise.all(
                urls.map(async (url) => {
                    const query = await fetch(`https://api.themoviedb.org/3/search/${url}?api_key=d98ee9811e179187b61f0f6b83bb3918&query=${category}`);
                    const responseQuery = await query.json();
                    newArray.current.push({
                        [url]: responseQuery.results
                    })
                })
            )
            setSearchDataMovie(newArray.current)
        }
        generateCategory()
    }, [])

    useEffect(() => {
        async function generateCategory() {
            const query = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d98ee9811e179187b61f0f6b83bb3918&query=${category}`);
            const responseQuery = await query.json();
            setGetMovie(responseQuery)

        }
        generateCategory()
    }, [])
    return (
        <>

            <Menu />
            <Container>
                <CenteredTabs category={category} params={match.params.category} data={searchDataMovie} />
            </Container>
            {handleParams(match.params.category, searchDataMovie)}
            <GenericFooter />
        </>
    )
}


export default Search;


const Container = styled(ContainerMaterialIU)`
margin-top:93px;
display:flex;
flex-wrap:wrap;
`


