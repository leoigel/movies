import React from 'react';
import {H3,Select,Option,Div} from '../ui/ButtonFilter'
import useMovies from '../hooks/useMovies';
const Years = () => {
    const { yearChoosed } = useMovies();
    const currentYear = new Date().getFullYear();
    const arrayOfYearOption = [];
    for (let i = currentYear; i >= 1990; i--) {
        arrayOfYearOption.push(i);
    }
    return (
        <>
        <Div>
        <H3>Year</H3>
            <Select onChange={(e) => yearChoosed(e.target.value)}>
                {arrayOfYearOption.length !== 0 && (
                    arrayOfYearOption.map((year,index) => {
                        return <Option key={index}>{year}</Option>
                    })
                )}
            </Select>
        </Div>
        </>
    )
}
export default Years;

