import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import useMovies from '../hooks/useMovies';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Paper as PaperMaterialUI, Container as ContainerMaterialUI} from '@material-ui/core/';



const ChartPop = () => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const { year,sortInput,genresData } = useMovies();
  useEffect(() => {
    async function mostPopularyMovies() {
      const popularyMovies = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d98ee9811e179187b61f0f6b83bb3918&language=en-US&sort_by=${sortInput}&year=${year}&with_genres=${genresData}`);
      const responsePopularyMovies = await popularyMovies.json();
      retriveCategories(responsePopularyMovies);
      retriveData(responsePopularyMovies);
    }
    mostPopularyMovies();
  }, [year,sortInput,genresData]);

  const options = {
    chart: {
      height: 525,
      width: "320",
      background: "#f4f4f4",
      foreColor: "#333"
    },
    xaxis: {
      categories: categories
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: `Most Populary Movies ${year}`,
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "20px"
      }
    }
  };

  const series = [
    {
      name: "Populary Movies",
      data: data,
    }
  ]
  const retriveCategories = (obj) => {
    const { results } = obj;
    setData(results.map(categorie => categorie.popularity))
  }
  const retriveData = (obj) => {
    const { results } = obj;
    setCategories(results.map(categorie => categorie.title))
  }
  return (
    <>
      {categories.length > 0 && data.length > 0 ? (
        <Container>
           <h1>Popular Movies</h1>
          <Paper>
            <Chart options={options} series={series} type={'bar'} width='100%' height='500'/>
          </Paper>
        </Container>
      ) : <CircularProgress disableShrink />}
    </>
  )
}

export default ChartPop;

const Paper = styled(PaperMaterialUI)`
padding: 10px;
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