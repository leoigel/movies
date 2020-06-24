import React, { useState } from 'react';
import { AppBar as AppBarMaterialUI } from '@material-ui/core';
import useMovies from '../hooks/useMovies';
import MenuLargeWidth from './MenuLargeWidth';
import MenuSmallWidth from './MenuSmallWidth';
import { Link } from 'react-router-dom';
import {
  Toolbar,
  Container,
  Typography as TypographyMaterialUI,
} from '@material-ui/core';

import styled from 'styled-components';

const Menu = () => {
  const [open, setClose] = useState(false);
  const { windowDimensions } = useMovies();
  const { width } = windowDimensions;

  const handleImage = () => {
    setClose(!open);
  };
  return (
    <>
      <AppBar style={{ background: '#000033' }}>
        <Container>
          <Div>
            <Toolbar>
              <Link to="/">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
                  alt="logo"
                  width="81"
                />
              </Link>
            </Toolbar>
            <DropDown>
              <Typography>{localStorage.getItem('userName')}</Typography>
              <DivImg onClick={handleImage}>
                <Img src={localStorage.getItem('upLoadedImage')} />
              </DivImg>
              {width >= 600 ? (
                <MenuLargeWidth open={open} />
              ) : (
                <MenuSmallWidth open={open} />
              )}
            </DropDown>
          </Div>
        </Container>
      </AppBar>
    </>
  );
};

export default Menu;

const AppBar = styled(AppBarMaterialUI)`
  padding: 10px;
  color: primary;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DropDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Typography = styled(TypographyMaterialUI)`
  padding: 10px;
`;
const DivImg = styled.div`
  width: 40px;
  height: 40px;
  border: solid 0.4px gray;
  border-radius: 50%;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.8);
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
