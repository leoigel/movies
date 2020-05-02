import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import BoardReview from './BoardReview';
import ReviewsUser from './ReviewsUser';
import GenericFooter from './GenericFooter';
import Menu from './Menu';

const ReviewPage = ({ match,reviewId,reviewAdded }) => {

    const [info, setInfo] = useState({});
    useEffect(() => {

        async function review() {

            const reviewData = await fetch(`https://api.themoviedb.org/3/movie/${reviewId}?api_key=d98ee9811e179187b61f0f6b83bb3918&language=en-US&append_to_response=credits%2Cvideos%2Creviews`);

            const responsereviewData = await reviewData.json();
            setInfo((info) => {
                return {
                    ...info,
                    info: setInfo(responsereviewData)
                }

            })

        }
        review();
    }, []);
    return (
        <>
            <Menu />
            <DivConteiner reviewAdded={reviewAdded}>
                {/* {Object.keys(info).length !== 0 && <ReviewsUser info={info} />} */}
                <BoardReview info={info} />
            </DivConteiner>
            <GenericFooter />
        </>
    )

}
export default ReviewPage;



const DivConteiner = styled.div`
margin-top:${props => props.reviewAdded? '0px':'120px'};
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`
