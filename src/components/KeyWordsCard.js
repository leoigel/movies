import React from 'react';
import { withRouter,Redirect } from 'react-router-dom';
import getCategory from '../utlits/getCategory';
import useMovies from '../hooks/useMovies';
import { Container } from '../ui/StyleCategory';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MovingForm from './MovingForm';
import {LI}  from '../ui/StyleCategory';
import {H1} from '../ui/ButtonFilter';
import '../css/style.css';
const KeyWordsCard = ({ match }) => {
    const { searchDataMovie,windowDimensions} = useMovies();
    const { width } = windowDimensions;
    const keyWordCategory = getCategory(searchDataMovie, match.params.category);
    if(!keyWordCategory) {
        return  <Redirect to="/" />
      }
    const { keyword } = keyWordCategory;

    return (
        <Container>
            {width >= 630 && <MovingForm />}
            <div style={{flexGrow:'3'}}>
                <ul>
                    {keyword && keyword.length !== 0 ? keyword.map((keyWord, index) => {
                        return (

                            <LI key={index}><CheckCircleIcon/> {keyWord.name}</LI>
                        )
                    }) : <H1>This content is not available</H1>}
                </ul>
            </div>
        </Container>
    )
}

export default withRouter(KeyWordsCard);