import React from 'react';
import { ImgVerticalNotfound, CardsContainer, Size, Container } from '../ui/StyleCategory';
import { H3 } from '../ui/ButtonFilter';
import { withRouter, Redirect } from 'react-router-dom'
import useMovies from '../hooks/useMovies';
import getCategory from '../utlits/getCategory';
import MovingForm from './MovingForm';
import { H1 } from '../ui/ButtonFilter';
import '../css/style.css'
const CompanyCard = ({ match }) => {
    const { searchDataMovie, windowDimensions } = useMovies();
    const { width } = windowDimensions;
    const companyCategory = getCategory(searchDataMovie, match.params.category);
    if (!companyCategory) {
        return <Redirect to='/' />
    }
    const { company } = companyCategory;
    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <Container>
                {width >= 630 && <MovingForm />}
                <div style={{ flexGrow: '3' }}>
                    {
                        company && company.length !== 0 ? (
                            company.map((companyCard, index) => {
                                console.log(companyCard)
                                return (

                                    <Size key={index}>
                                        <CardsContainer>
                                            {companyCard.logo_path ? <img src={`${`https://image.tmdb.org/t/p/w185/${companyCard.logo_path}`}`} /> : <ImgVerticalNotfound />}
                                            <H3>{companyCard.name}</H3>
                                        </CardsContainer>
                                    </Size>

                                )
                            })
                        ) : <H1>This content is not available</H1>
                    }
                </div>
            </Container>
        </div>


    )
}

export default withRouter(CompanyCard);

