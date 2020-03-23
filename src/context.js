import React, { useState, useEffect,useRef } from 'react';

export const Context = React.createContext();


const MoviesProvider = ({ children }) => {
    const [dataMovie, setDataMovie] = useState({});
    const [listMovies, setListMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [valueInput, setValueInput] = useState('');
    const [year, setYear] = useState('2020');
    const [genres, setGenres] = useState([]);
    const [genresData, setGenresData] = useState('28');
    const [sortInput, setSortInput] = useState('');
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [windowDimensions]);
    useEffect(() => {
        async function init() {
            const genresObj = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=d98ee9811e179187b61f0f6b83bb3918&language=en-US`);
            const responseGenres = await genresObj.json();
            const { genres } = responseGenres;
            setGenres(genres)

        }
        init()
    }, [])
    useEffect(() => {
        async function createGeneralData() {
            const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d98ee9811e179187b61f0f6b83bb3918&language=en-US&sort_by=${sortInput}&page=${page}&year=${year}&with_genres=${genresData}`);
            const responseData = await data.json();
            selectYear(responseData.results,responseData)
            setDataMovie((movie) => {
                return {
                    ...movie,
                    page:page,
                    total_results:responseData.total_results,
                    totalPage:responseData.totalPage,
                    results:responseData.results
                }
            })
        }
        createGeneralData()
    },[page,year,genresData,sortInput]);
    
   function getWindowDimensions() {
        const { innerWidth: width } = window;
        return {
          width,
        };
      }

    const deleteFromGernes = (value, option) => {
        setGenresData(option.id.toString())
        if (value.length <= 1) {
            setGenresData('18')
        }
    }
    const handleGenresData = (genreTitle, data) => {
        const titleId = data.find(title => {
            return title.name === genreTitle;
        })
        setGenresData(titleId.id.toString())
    }

    const selectYear = (results,data) => {
        const holdChoosedDate = [];
        results.map((item) => {
            if (item.release_date.slice(0, 4) === year) {
                holdChoosedDate.push(item)
            }
        })
        for (let key in data) {
            if (key === 'results') {
                data[key] = holdChoosedDate
            }
        } 
        yearChoosed(year)
    }

    const yearChoosed = (value) => {
        setYear(value)
     
    }
    const pagination = (value) => {
        setDataMovie(movie => {
            return {
                ...movie,
                page:setPage(value),
            }
        })
    }
    const filterMoviesSearch = (movie) => {
        setValueInput(movie)
        const moviesfiltered = dataMovie.results.filter(title => {
            return title.original_title.toLowerCase().includes(movie.toLowerCase())
        })
        setListMovies(moviesfiltered);
    }
    return (
        <Context.Provider value={{
            filterMoviesSearch,
            listMovies,
            pagination,
            valueInput,
            yearChoosed,
            year,
            genres,
            handleGenresData,
            deleteFromGernes,
            setSortInput,
            dataMovie,
            windowDimensions,
        }}>
            {children}
        </Context.Provider>
    )
}

export default MoviesProvider;