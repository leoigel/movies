import React, { useState } from 'react';
import styled from 'styled-components';
import {ImgPostNotFound} from '../ui/MovieCardUI';
const PostComment = ({ post,comments }) => {
    const [like,setLike] = useState(false);
    const [likes,setAdd] = useState(post.likes);
    const addLike = () => {
      setLike(!like);
      if(like) {
        setAdd( likes - 1)  
      }else {
        setAdd(likes + 1)
      }
    }
    console.log(post)
    return (
      <Post >
        <PostBody >
          {post.userPic?<img style={{maxWidth:'50px',maxHeight:'50px'}} src={post.userPic} alt="user Pic" />:<ImgPostNotFound />}
          <PostContent >
            <PostHeader>
              <PostAuthor id={post.id}>{post.user}</PostAuthor>
              <PublishDate>{post.publishDate}</PublishDate>
            </PostHeader>
            <PostText>{post.content}</PostText>
            <PostDesc>
              <Desc className="desc">
              <i onClick={addLike} className="far fa-heart"></i> 
                <span>{likes} </span>
                Likes
              </Desc>
              <Desc className="desc"><i class="fas fa-comment"></i><span>{comments.length}</span> Comments</Desc>
            </PostDesc>
          </PostContent>
        </PostBody>
      </Post>
    )
  }

  export default PostComment;


const Post = styled.div`
background: #fff;
padding: 20px;
border-radius: 20px;
`
const PostBody = styled.div`
display: flex;
`
const PostContent = styled.div`
`
const PostHeader = styled.div`
display: flex;
align-items: center;
`
const PostAuthor = styled.h2`
margin:0;
margin-bottom: 5px;
`
const PublishDate = styled.span`
color: #787878;
margin-left: 15px;
`
const PostText = styled.span`
font-weight: 500;
`
const PostDesc = styled.div`
margin-top: 15px;
`
const Desc = styled.span`
margin-right: 20px;
`

