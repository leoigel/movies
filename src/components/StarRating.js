import React,{useState} from 'react';
import useMovies from '../hooks/useMovies';
import { styled } from '@material-ui/core';

const Star = ({ marked,id }) => {
    return (
        <span
            starId={id}
            role="button"
            style={{ color: "#ff9933", cursor: "pointer" }}
           >
            {marked ? "\u2605" : "\u2606"}
        </span>
    );
};


const StartRating = () => {
    const [selection, setSelection] = useState(0);
    const [rating, setRating] = useState(0);
    const {setStars} = useMovies();
    let starArray = [];
    const handleMouseOver = (e) => {
        let starId = parseInt(e.target.getAttribute('starId'))
        setSelection(starId); 
        Array.from({length:starId},(v,i) => {
            starArray.push("\u2605");
            setStars(starArray)

        })
    }
    

    return (
        <div
        onMouseOver={handleMouseOver}
        onClick={e => { 
            setRating(e.target.getAttribute('starId'))
        }}
       >
            {Array.from({ length: 5 }, (v, i) => {
                return (
                    <Star marked={selection? selection > i: rating > i} id={i + 1} />
                )
            })}
        </div>
    )
}

export {StartRating,Star};