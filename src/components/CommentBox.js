import React, { useState, useRef } from 'react';
import PostComment from './PostComment';
import CreateComment from './CreateComment';
import Comment from './Comment';
import { Container } from '@material-ui/core';
import '../css/comment.css';

const CommentBox = ({ comments, post }) => {
  const [arrayComments, setArrayComments] = useState(comments);
  const newComments = useRef([]);
  const handleCommentSubmit = (comment) => {
    newComments.current.push(comment);
    setArrayComments([...arrayComments, ...newComments.current]);
  };

  return (
    <Container>
      <h1>Comments</h1>
      <PostComment post={post} comments={arrayComments} />
      <CreateComment onCommentSubmit={handleCommentSubmit} />
      {arrayComments.map((comment) => {
        return (
          <Comment
            publishDate={comment.publishDate}
            key={comment.id}
            id={comment.id}
            content={comment.content}
            user={comment.user}
            userPic={comment.userPic}
          />
        );
      })}
    </Container>
  );
};

export default CommentBox;
