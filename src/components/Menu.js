import React from 'react';
import {AppBar as AppBarMaterialUI} from '@material-ui/core';
import {Toolbar,Container} from '@material-ui/core';
import styled from 'styled-components';


 const Menu = () =>  {
  return (
    <AppBar >
     <Container>
     <Toolbar>
         <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt='logo' width='81'/>
     </Toolbar>
     </Container>
    </AppBar>
  );
}

export default Menu;


const AppBar = styled(AppBarMaterialUI)`
padding:10px;
color:secondary;
`