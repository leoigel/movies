import React from 'react';
import {BoxLinks,Ui,Li, } from '../ui/MovieCardUI';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {StartRating} from './StarRating';  
   

const BoxFavorite = ({card}) => {
    return (
        <BoxLinks>
            <Ui>
                <Li to='/favorites'>
                    Go to Favorites
                    <FavoriteIcon />
                </Li>
                <Li to={`/reviewpage/${card.id}`}>
                    Add Reviews
                    <ChatBubbleIcon />
                </Li>
                <Li to={`/information/${card.id}`}>
                    Rating
                    <StartRating />
                </Li>
            </Ui>
        </BoxLinks>
    )
}

export default BoxFavorite;