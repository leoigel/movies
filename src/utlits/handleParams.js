import React from 'react'
import Cards from '../components/Cards';
import KeyWordsCard from '../components/KeyWordsCard';
import PersonCard from '../components/PersonCard';
import CompanyCard from '../components/CompanyCard';
const handleParams = (params, searchDataMovie) => {
    if (params === 'person') {
        return <PersonCard person={searchDataMovie} />
    }
    if (params === 'company') {
        return <CompanyCard company={searchDataMovie} />
    }
    if (params === 'keyword') {
        return <KeyWordsCard keyWords={searchDataMovie} />
    }
    if (params === 'movie') {
        return <Cards data={searchDataMovie} />
    }
    if (params === 'tv') {
        return <Cards data={searchDataMovie} />
    }
}

export default handleParams;