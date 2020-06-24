import React from 'react';
import { Select, Option, Div } from '../ui/ButtonFilter';
import { sort_by } from '../utlits/sort_by';
import useMovies from '../hooks/useMovies';
const SortBy = () => {
  const { setSortInput } = useMovies();
  const optionsTofilterDescOrAsc = [
    'Popularity Descending',
    'Popularity Ascending',
    'Rating Descending',
    'Rating Ascending',
    'Release Date Descending',
    'Release Date Ascending',
    'Title (A-Z)',
    'Title (Z-A)',
  ];
  return (
    <>
      <Div>
        <Select onChange={(e) => sort_by(setSortInput(e.target.value))}>
          {optionsTofilterDescOrAsc.map((option, index) => {
            return <Option key={index}>{option}</Option>;
          })}
        </Select>
      </Div>
    </>
  );
};
export default SortBy;
