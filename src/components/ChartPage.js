import React from 'react';
import { Container as ContainerMaterialUI } from '@material-ui/core/';
import styled from 'styled-components';
import ChartPopulaty from './ChartPopulaty';
import TopRatedChart from './TopRatedChart';
import Years from './Years';
import Menu from './Menu';
import ContainerFilter from './ContainerFilter';
import GenericFooter from './GenericFooter';
const ChartPage = () => {

    return (
        <>
            <Menu />
            <Container>
                <DivConteiner >
                    <ContainerFilter />
                </DivConteiner>
                <ChartPopulaty />
                <TopRatedChart />
            </Container>
            <GenericFooter />
        </>
    )
}

export default ChartPage;

const Container = styled(ContainerMaterialUI)`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
margin-top:100px;
`
const DivConteiner = styled.div`
align-self:flex-start;
`