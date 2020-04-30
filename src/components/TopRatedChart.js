import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import useMovies from '../hooks/useMovies';
import styled from 'styled-components';
import { Paper as PaperMaterialUI, Container as ContainerMaterialUI } from '@material-ui/core/';


const TopRatedChart = () => {
    const [labels, setLabels] = useState([]);
    const [data, setData] = useState([]);
    const { year,sortInput,genresData } = useMovies();
    useEffect(() => {
        async function mostRatedMovies() {
            const ratedMovies = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d98ee9811e179187b61f0f6b83bb3918&language=en-US&sort_by=${sortInput}&year=${year}&with_genres=${genresData}`);
            const responseRatedMovies = await ratedMovies.json();
            retriveCategories(responseRatedMovies);
            retriveData(responseRatedMovies);
        }
        mostRatedMovies();
    }, [year,sortInput,genresData]);
    const series = data
    const options = {
        chart: {
            height: 325,
            width: "320",
            background: "#f4f4f4",
            foreColor: "#333"
        },
        labels: labels,
        theme: {
            monochrome: {
                enabled: false
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -5
                }
            }
        },
        title: {
            text: `Top Rated ${year}`,
            align: "center",
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: "20px"
            }
        },
        legend: {
            show: false
        }
    }
    const retriveCategories = (obj) => {
        const { results } = obj;
        setData(results.map(categorie => categorie.vote_count))
    }
    const retriveData = (obj) => {
        const { results } = obj;
        setLabels(results.map(categorie => categorie.title))
    }
    return (
        <>
            {labels.length > 0 && data.length > 0 && (
                <Container>
                    <h1>Top Rated Movies</h1>
                    <Paper>
                        <Chart options={options} series={series} type="pie" height='400' width='100%'/>
                    </Paper>
                </Container>
            ) }
        </>




    );
}
export default TopRatedChart;

const Paper = styled(PaperMaterialUI)`
// padding: 10px;
width: 100%;
border: 1px solid #F2F2F2;
outline: none;
border-radius: 4px 4px 0 0;
display:flex;
flex-direction:column;
justify-content:center;
margin:15px 15px 10px 10px;
`
const Container = styled(ContainerMaterialUI)`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`