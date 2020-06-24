// https://api.themoviedb.org/3/movie/330457/videos?api_key=d5e4a2eb5fb264de1583b6945d203546
import React from 'react';
import styled, { keyframes } from 'styled-components';
import YouTube from 'react-youtube';

function TrailerCard({ movie_video }) {
  const opts = {
    height: '180',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <StyledTrailerWrapper>
      {movie_video ? (
        <YouTube videoId={movie_video.key} opts={opts} onReady={_onReady} />
      ) : (
        <NoTrailerFound>
          <p>Trailer is currently unavailable.</p>
          <img
            src={`https://www.like4like.org/img/blog/youtube-sad-face-128.jpg`}
            style={{ margin: '10px' }}
            alt="youtube-sad-face"
          />
        </NoTrailerFound>
      )}
    </StyledTrailerWrapper>
  );
}

export default TrailerCard;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const NoTrailerFound = styled.div`
  display: flex;
  align-items: center;
`;
const StyledTrailerWrapper = styled.div`
  animation: ${fadeIn} 2s;
`;
