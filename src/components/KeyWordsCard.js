import React from 'react';

const KeyWordsCard = ({keyWords}) => {
    const {results} = keyWords;
    return (
        <ul>
            {results === 0 ?'This content is not available':results.map((keyWord,index) => {
                return <li key={index}>{keyWord.name}</li>
            })}
        </ul>
    )
}

export default KeyWordsCard;