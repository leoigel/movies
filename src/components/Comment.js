import React from 'react';
import styled from 'styled-components';

const Comment = ({ userPic, user, publishDate, content }) => {
  return (
    <Comments>
      <CommentPic src={userPic} alt="user Pic" />
      <CommentBody>
        <CommentHeader>
          <CommentAuthor>{user}</CommentAuthor>
          <PublishDate className="publishDate">{publishDate}</PublishDate>
        </CommentHeader>
        <span>{content}</span>
      </CommentBody>
    </Comments>
  );
};

export default Comment;

const Comments = styled.div`
  padding: 10px;
  margin: 20px 30px;
  color: rgb(68, 58, 58);
`;
const CommentPic = styled.img`
  max-width: 45px;
  max-height: 45px;
`;
const CommentBody = styled.div`
  max-width: 580px;
  overflow-wrap: break-word;
`;
const CommentHeader = styled.div`
  display: flex;
  align-items: center;
`;
const CommentAuthor = styled.h3`
  margin: 0;
`;
const PublishDate = styled.span`
  color: #787878;
  margin-left: 15px;
`;
