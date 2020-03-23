
export const sort_by = (data) => {
    
    if(data === 'Popularity Descending') {
        data = 'popularity.desc';
    }
    if(data === 'Popularity Ascending') {
        data = 'popularity.asc';
    }
    if(data === 'Rating Descending') {
        data = 'vote_average.desc';
    }
    if(data === 'Rating Ascending') {
        data = 'vote_average.asc';
    }
    if(data === 'Release Date Descending') {
        data = 'release_date.desc';
    }
    if(data === 'Release Date Ascending') {
        data = 'release_date.asc';
    }
    if(data === 'Title (A-Z)') {
        data = 'original_title.desc';
    }
    if(data === 'Title (Z-A)') {
        data = 'original_title.asc'
    }

    return data;
    
}