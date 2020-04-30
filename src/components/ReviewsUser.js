import React from 'react';
import { Container, Paper as PaperMatirialUI } from '@material-ui/core';
import getRandomInt from '../utlits/getRandomInt';
import styled from 'styled-components';

const ReviewsUser = ({ info }) => {
  
    const { reviews } = info;

    return (
        <Container>
           

            { reviews.results.length !== 0 && (
                reviews.results.map((review, index) => {
                    return (
                        <Paper elevation={3} key={review.id}>
                            <ReviewHeader>
                                <Title>
                                    <H3>{` A review by ${review.author}`}</H3>
                                    <H5>{`Written by ${review.author}`}</H5>
                                </Title>
                                <Span><i class="fas fa-star"></i>{getRandomInt(1, 10).toFixed(1)}</Span>
                            </ReviewHeader>
                            <Paragraph>{review.content}</Paragraph>
                        </Paper>
                    )

                })

            ) }
         

        </Container>

    )
}
export default ReviewsUser;


const Paper = styled(PaperMatirialUI)`
padding:24px;
margin:8px;
max-width:70vw;
`
const ReviewHeader = styled.div`
display:flex;
`
const Title = styled.div``

const H3 = styled.h3`
margin:0px;
padding:0px;
`
const H5 = styled.h5`
margin:0px;
padding:0px;
`
const Span = styled.span`
padding: 1px 8px;
margin-left: 14px;
font-size: 0.9em;
display: inline-flex;
align-items: center;
align-content: center;
justify-content: center;
background-color: #000;
border-color: #000;
border-radius: 8px;
color: #fff;
`
const Paragraph = styled.p`
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
line-height: 16px;
max-height: 50px;    
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
`