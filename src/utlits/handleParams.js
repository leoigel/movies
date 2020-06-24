import React from 'react';
import KeyWordsCard from '../components/KeyWordsCard';
import PersonCard from '../components/PersonCard';
import CompanyCard from '../components/CompanyCard';
import MovieCard from '../components/MovieCard';
import TvCard from '../components/TvCard';

const handleParams = (params, searchDataMovie) => {
  let data;
  if (params === 'person') {
    data = <PersonCard person={searchDataMovie} />;
  } else if (params === 'company') {
    data = <CompanyCard company={searchDataMovie} />;
  } else if (params === 'keyword') {
    data = <KeyWordsCard keyWords={searchDataMovie} />;
  } else if (params === 'movie') {
    data = <MovieCard data={searchDataMovie} />;
  } else if (params === 'tv') {
    data = <TvCard data={searchDataMovie} />;
  }
  return data;
};

export default handleParams;
