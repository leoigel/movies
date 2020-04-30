import React from 'react';
import MediaTab from './MediaTab';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
const Media = ({params}) => {
    return (
        <MainMedia>
            <Container>
                <h1>Media</h1>
                <MediaTab params={params} />
            </Container>
        </MainMedia>
    )
}

export default Media;
const MainMedia = styled.div``;