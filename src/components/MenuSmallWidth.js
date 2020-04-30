import React, { useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeIcon from '@material-ui/icons/Home';
import {  Divider, ListItem as ListItemMaterialUI, ListItemText as ListItemTextMaterialUI } from '@material-ui/core';
import styled, { keyframes } from 'styled-components'
const MenuSmallWidth = ({ history, open }) => {
    const handleLogout = () => {
        localStorage.clear()
        history.push('/login');
    }
    return (
        <>
            {open ? <Container >
                <ListItem >
                    <ExitToAppIcon fontSize='large' style={{ color: '#8080ff' }} />
                    <ListItemText primary='Logout' onClick={handleLogout} />
                </ListItem>
                <Divider />
                <ListItem to='/favorites'>
                    <FavoriteIcon fontSize='large' style={{ color: '#8080ff' }} />
                    <ListItemText primary='Favorite' />
                </ListItem>
                <Divider />
                <ListItem to='/chartpage'>
                    <EqualizerIcon fontSize='large' style={{ color: '#8080ff' }} />
                    <ListItemText primary='Chart' />
                </ListItem>
                <Divider />
                <ListItem to='/'>
                    <HomeIcon fontSize='large' style={{ color: '#8080ff' }} />
                    <ListItemText primary='Home' />
                </ListItem>
                <Divider />
            </Container> : null}
        </>
    )
}

export default withRouter(MenuSmallWidth);

const ContainerAnimation = keyframes`
0% {
    transform: translateY(-300px);
  }
  50%{
    transform: translateY(0px);
  }
  100%{
    transform: translateY(0px);
`

const Container = styled.div`
width:100vw;
position:fixed;
top:92px;
left:0px;
animation-name: ${ContainerAnimation};
animation-duration: 2s;
`
const ListItem = styled(ListItemMaterialUI).attrs({
    component: Link
})`
min-width:600px;
background:#f0f5f5;
margin-bottom:-1px;
border-bottom:2px #fff solid;
transition:padding-left 1s;
&:hover{
    background: whitesmoke;
    padding-left:30px;
  }
`
const ListItemText = styled(ListItemTextMaterialUI)`
font-size:18px;
color: #2d5986;
font-weight:500;
margin-left:8px;
`

