import React, { useState } from 'react';
import styled from 'styled-components';

const CreateComment = ({ onCommentSubmit }) => {
    const [content, setContent] = useState('');
  
    const handleTextChange = e => {
      setContent(e.target.value)
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      onCommentSubmit({
        user: localStorage.getItem('userName'),
        content: content,
        userPic: localStorage.getItem('upLoadedImage'),
        publishDate: "Right now"
      })
      setContent('');
    }
    return (
      <Form onSubmit={handleSubmit} className="createComment">
        <label htmlFor="comment">Your Comment</label>
        <Textarea
          id="comment"
          type="text"
          placeholder="Comment"
          value={content}
          onChange={handleTextChange}
          required />
        <Button>Post Comment</Button>
      </Form>
    )
  }

  export default CreateComment;
  const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  `
  const Button = styled.button.attrs({
    type:'submit'
  })`
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
  margin-top: 10px;
  border-radius: 15px;
  border: 1px solid #787878;
  padding: 5px 5px 5px 10px;
  width:60vw;
  height: 70px;
  transition: 0.2s;
  box-sizing: border-box;
  resize: none;
  `