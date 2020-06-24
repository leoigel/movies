import React, { useState, useEffect, useRef } from 'react';
import useDebounce from './hooks/useDebounce';
export const Context = React.createContext();

const MoviesProvider = ({ children }) => {
  const [dataMovie, setDataMovie] = useState({});
  const [page, setPage] = useState(4);
  const [valueInput, setValueInput] = useState('');
  const [year, setYear] = useState('2020');
  const [genres, setGenres] = useState([]);
  const [genresData, setGenresData] = useState('28');
  const [sortInput, setSortInput] = useState('');
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [validateSearch, setValidateSearch] = useState(false);
  const [searchDataMovie, setSearchDataMovie] = useState([]);
  const [getMovie, setGetMovie] = useState({});
  const [inProp, setInProp] = useState(false);
  const [stars, setStars] = useState([]);
  const [upLoadedImage, setUpLoadedImage] = useState(
    'http://i.pravatar.cc/500?img=7'
  );
  const [favoritesCards, setFavoritesCard] = useState([]);
  const newData = useRef([]);
  const [categoryMoving, setCategoryMoving] = useState(null);
  const [querys, setQuerys] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(valueInput, 500);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);

  useEffect(() => {
    async function init() {
      const genresObj = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=d98ee9811e179187b61f0f6b83bb3918&language=en-US`
      );
      const responseGenres = await genresObj.json();
      const { genres } = responseGenres;
      setGenres(genres);
    }
    init();
  }, []);

  useEffect(() => {
    async function createGeneralData() {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=d98ee9811e179187b61f0f6b83bb3918&language=en-US&sort_by=${sortInput}&page=${page}&year=${year}&with_genres=${genresData}`
      );
      const responseData = await data.json();
      newData.current.push(...responseData.results);

      setDataMovie((dataMovie) => {
        return {
          ...dataMovie,
          page: page,
          total_results: responseData.total_results,
          totalPage: responseData.totalPage,
          results: newData.current.reverse(),
        };
      });
      return () => {
        console.log('cleaned up');
      };
    }

    createGeneralData();
  }, [page, year, genresData, sortInput]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchCharacters(debouncedSearchTerm).then((results) => {
        setIsSearching(false);
        setQuerys(results);
      });
    } else {
      setQuerys([]);
    }
  }, [debouncedSearchTerm]);

  function searchCharacters(search) {
    const query = fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d98ee9811e179187b61f0f6b83bb3918&language=en-US&query=${search}&page=1&include_adult=false`
    )
      .then((r) => r.json())
      .then((r) => r.results)
      .catch((error) => {
        console.error(error);
        return [];
      });

    return query;
  }

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width,
    };
  }

  const deleteFromGernes = (value, option) => {
    setGenresData(option.id.toString());
    if (value.length <= 1) {
      setGenresData('18');
    }
  };
  const handleGenresData = (genreTitle, data) => {
    const titleId = data.find((title) => {
      return title.name === genreTitle;
    });
    setGenresData(titleId.id.toString());
  };

  const yearChoosed = (value) => {
    setYear(value);
  };

  const pagination = (value, vBoleean) => {
    setDataMovie((movie) => {
      return {
        ...movie,
        page: setPage(value),
      };
    });
  };

  return (
    <Context.Provider
      value={{
        pagination,
        valueInput,
        yearChoosed,
        year,
        genres,
        handleGenresData,
        genresData,
        deleteFromGernes,
        setSortInput,
        sortInput,
        dataMovie,
        windowDimensions,
        validateSearch,
        setValidateSearch,
        searchDataMovie,
        setSearchDataMovie,
        getMovie,
        setGetMovie,
        setPage,
        page,
        setDataMovie,
        inProp,
        setInProp,
        upLoadedImage,
        setUpLoadedImage,
        stars,
        setStars,
        favoritesCards,
        setFavoritesCard,
        newData,
        setValueInput,
        querys,
        categoryMoving,
        setCategoryMoving,
        isSearching,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MoviesProvider;
