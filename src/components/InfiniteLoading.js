import React, { useRef, useEffect, useState } from 'react';
import Cards from './Cards';
import useMovies from '../hooks/useMovies';
import CircularProgress from '@material-ui/core/CircularProgress';

import styled from 'styled-components';
const InfiniteLoading = () => {
    const {  page, setPage,newData } = useMovies();
    const element = useRef();
    const addPage = useRef(page);
   
    const [scroll, setScroll] = useState(null);
    const [arrow, setArrow] = useState(false);
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, self) => {
        const intersecting = entries[0].isIntersecting;
        setScroll(intersecting)
    }, options)

    useEffect(() => {
        observer.observe(element.current)
        return () => observer.disconnect()
    }, [])
    useEffect(() => {
        async function init() {
            setArrow(false)

            setTimeout(() => {
                if (scroll) {
                    setPage(addPage.current++)
                    setArrow(true)
                }
            }, 1000)
        }
        init()
    }, [scroll])

    const slideUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
        
            <DIV ref={element}>{arrow ? null : <CircularProgress />}</DIV>
            {newData.current.length > 0 ? <Button variant="contained" color="primary" onClick={slideUp}><Span><i className="fas fa-arrow-up"></i></Span></Button> : null}
        </>
    )
}

export default InfiniteLoading;

const DIV = styled.div`
display:flex;
justify-content:center;
margin:20px 0px;
`
const Button = styled.div`
position:fixed;
right: 20px;
opacity: 0.3;
background-color: aqua;
width: 40px;
height: 40px;
bottom: 10px;
border-radius: 5px;
border: none;

&:hover {
  opacity: 1;
}
`
const Span = styled.span`
color: white;
display:flex;
padding:5px;
justify-content:center;
align-items:center;
font-size:30px;
font-weight:900;
`