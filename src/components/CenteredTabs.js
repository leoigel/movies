import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Tabs as TabsMaterialIU } from '@material-ui/core';
import { Tab as TabMaterialUI } from '@material-ui/core';

export default function CenteredTabs({ category }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="off"
    >
      <Tab label="Movie" to={`/search/movie?query=${category}`} />
      <Tab label="Tv" to={`/search/tv?query=${category}`} />
      <Tab label="Person" to={`/search/person?query=${category}`} />
      <Tab label="Companies" to={`/search/company?query=${category}`} />
      <Tab label="KeyWords" to={`/search/keyword?query=${category}`} />
    </Tabs>
  );
}
const Tabs = styled(TabsMaterialIU)`
  margin: 15px auto;
  padding: 10px;
`;
const Tab = styled(TabMaterialUI).attrs({
  component: Link,
})``;
