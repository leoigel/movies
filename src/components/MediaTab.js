import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Container } from '@material-ui/core';
import styled from 'styled-components';

const MediaTab = ({ params }) => {
  const [value, setValue] = React.useState(0);
  const [valueTab, setValueTab] = useState('backdrops');
  const [backgrounds, setBackground] = useState([]);
  useEffect(() => {
    async function getmedia() {
      const media = await fetch(
        `https://api.themoviedb.org/3/movie/${params}/images?api_key=d98ee9811e179187b61f0f6b83bb3918&language=en-US&include_image_language=null`
      );
      const responseMedia = await media.json();
      setBackground(responseMedia[valueTab]);
    }
    getmedia();
  }, [valueTab]);
  const handleImages = (e) => {
    setValueTab(e.currentTarget.name);
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Backdrops" name="backdrops" onClick={handleImages} />
        <Tab label="Posters" name="posters" onClick={handleImages} />
      </Tabs>
      <Container>
        <ConteinerImg>
          {backgrounds.length !== 0 ? (
            backgrounds.map((background, index) => {
              return (
                <img
                  src={`https://image.tmdb.org/t/p/w300${background.file_path}`}
                  alt="file_path"
                  key={index}
                />
              );
            })
          ) : (
            <p>{`The ${valueTab.toUpperCase()} is unavailable`}</p>
          )}
        </ConteinerImg>
      </Container>
    </>
  );
};

export default MediaTab;

const ConteinerImg = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
`;
