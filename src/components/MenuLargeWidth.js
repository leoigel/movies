import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeIcon from '@material-ui/icons/Home';
import ArrowDropUpSharpIcon from '@material-ui/icons/ArrowDropUpSharp';
import {
  ListItemIcon as ListItemIconMaterialUI,
  ListItemText,
} from '@material-ui/core';
import styled from 'styled-components';

const MenuLargeWidth = ({ history, open }) => {
  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <LinksConteiner>
      {open ? (
        <>
          <div
            style={{
              position: 'absolute',
              transform: 'translate(-104%, 30%)',
              padding: '0px',
              margin: '0px',
            }}
          >
            <ArrowDropUpSharpIcon fontSize="large" />
          </div>
          <Itens>
            <div style={{ padding: '0px', margin: '0px' }}>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
                <ListItemText primary="Logout" onClick={handleLogout} />
              </ListItemIcon>
              <ListItemIcon>
                <FavoriteIcon fontSize="small" />
                <NavLink to="/favorites" style={{ textDecoration: 'none' }}>
                  <ListItemText primary="Favorite" />
                </NavLink>
              </ListItemIcon>
              <ListItemIcon>
                <EqualizerIcon fontSize="small" />
                <NavLink to="/chartpage" style={{ textDecoration: 'none' }}>
                  <ListItemText primary="Chart" />
                </NavLink>
              </ListItemIcon>
              <ListItemIcon>
                <HomeIcon fontSize="small" />
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                  <ListItemText primary="Home" />
                </NavLink>
              </ListItemIcon>
            </div>
          </Itens>
        </>
      ) : null}
    </LinksConteiner>
  );
};

export default withRouter(MenuLargeWidth);

const ListItemIcon = styled(ListItemIconMaterialUI)`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: whitesmoke;
  }
`;

const LinksConteiner = styled.div`
  position: relative;
  display: inline-block;
`;

const Itens = styled.div`
  position: absolute;
  transform: translate(-70%, 25%);
  background-color: #f9f9f9;
  border-radius: 9%;
  min-width: 60px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 0px 16px;
  z-index: 1;
`;
