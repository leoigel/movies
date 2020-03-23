import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import { Tab as TabMaterialUI } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



export default function CenteredTabs({ params, category,dataMovie}) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >

                <Tab label="Movie" to={`/search/movie?query=${category}`} />
                <Tab label="Tv" to={`/search/tv?query=${category}`} />
                <Tab label="Person" to={`/search/person?query=${category}`} />
                <Tab label="Companies" to={`/search/company?query=${category}`} />
                <Tab label="Keywords" to={`/search/keyword?query=${category}`} />
            </Tabs>
        </>
    );
}

const Tab = styled(TabMaterialUI).attrs({
    component: Link
})``