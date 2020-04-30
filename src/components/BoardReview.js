import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Container, Paper as PaperMatirialUI } from '@material-ui/core';
import CommentReview from './CommentReview';

const BoardReview = ({info}) => {
    const [content, setContent] = useState('');
    const [newCommnets, setNewCommnets] = useState([]);

    const data = {
        id: uuidv4(),
        content,
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        setNewCommnets([...newCommnets, data])
        setContent('')
    }
    const handleChange = (e) => {
        setContent(e.target.value)
    }


    return (
        <Container>
            <Paper elevation={3}>
                <H1>Add Review</H1>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Textarea onChange={handleChange} value={content} style={{ rows: "4", cols: "50", maxlength: "50" }} />
                    <Button type='submit'>Share</Button>
                   
                </Form>
            </Paper>
            <CommentReview newContent={newCommnets} setNewCommnets={setNewCommnets} info={info}/>
        </Container>

    )
}

export default BoardReview;

const Paper = styled(PaperMatirialUI)`
padding:24px;
margin:8px;
max-width:70vw;
`

const Button = styled.button`
font-family: 'Darker Grotesque', sans-serif;
color: #054231;
width: 160px;
color: #fff;
font-size: 18px;
padding: 10px;
padding-top: 7px;
transition: 0.5s;
cursor: pointer;
border-radius: 15px;
border: none;
background: #fc6f20;
margin-top: 20px;
box-shadow: 0px 5px 0px 0px #fc6f207a;
&:hover{
box-shadow: none;
transform: translateY(5px);
transition: all .1s linear;
    }
  `
const Textarea = styled.textarea`
  font-family: 'Darker Grotesque', sans-serif;
  font-size:18px
  margin-top: 10px;
  border-radius: 15px;
  border: 1px solid #787878;
  padding: 5px 5px 5px 10px;
  max-width:70vw;
  height: 70px;
  transition: 0.2s;
  box-sizing: border-box;
  margin:10px;
  resize: none;
  `
const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
`
const H1 = styled.h1`
position:relative;
`