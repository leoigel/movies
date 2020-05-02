import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useMovies from '../hooks/useMovies';
import data from '../utlits/dataRating';
import CircularProgress from '@material-ui/core/CircularProgress';
import Menu from './Menu';
import ModalInfo from './ModalInfo';
import CastInfo from './CastInfo';
import Media from './Media';
import CommentBox from './CommentBox';
import Reviews from './Reviews';
import GenericFooter from './GenericFooter';
import '../css/scrollBar.css';

const InformationMovie = ({ match }) => {
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const [getData,setData] = useState({})
    
    useEffect(() => {
        async function info() {
            
            const information = await fetch(`https://api.themoviedb.org/3/movie/${match.params.movieId}?api_key=d98ee9811e179187b61f0f6b83bb3918&language=en-US&append_to_response=credits%2Cvideos%2Creviews`)
            const responseInformation = await information.json();
            setLoading(false);
            setInfo((info) => {
                return {
                    ...info,
                    info: setInfo(responseInformation)
                }

            })
            setTimeout(() => {
                setLoading(true);
            }, 1000)
        }
        info()
    }, [])
   
    useEffect(() => {
       async function Data() {
        
            const dataComments = await fetch(`https://my.api.mockaroo.com/datathemovie.json?key=03dfab60`);
            const responseComments = await dataComments.json();
            setData(responseComments[Math.floor(Math.random() * responseComments.length)])
        };
        Data();
    }, [])
    
    return (
        <>
           
            {loading ? (
                <>
                 <Menu />
                    <ModalInfo info={info} />
                    <CastInfo info={info}/>
                    <Media params={match.params.movieId}/>
                    <Reviews info={info} reviewId={match.params.movieId}/>
                    <CommentBox comments={!getData.comments?data.comments:getData.comments}  post={!getData.post?data.post:getData.post}/>
                    
                </>
            ) : <DivLoading><CircularProgress disableShrink /></DivLoading>}
            <GenericFooter />
        </>
    )
}

export default InformationMovie;

const DivLoading = styled.div`
position: absolute;
top: 100px;
left: 50%;
transform:translate(-50%, -50%)
`











