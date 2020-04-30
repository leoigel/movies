import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { Paper as PaperMaterialUI, List as ListMaterialUI, ListItem as ListItemMaterialUI } from '@material-ui/core'
import useMovies from '../hooks/useMovies';

const MovingForm = ({ match }) => {
    const { searchDataMovie, categoryMoving } = useMovies();
    const lengths = (obj) => {
        for (let value in obj) {
            return obj[value].length
        }
    }
    const handleName = (e, category) => {
        return Object.keys(category).join('');

    }

    return (
        <div>
            <Paper>
            <H1>Results</H1>
                {/* <List> */}
                    {searchDataMovie && searchDataMovie.length !== 0 ? (
                        <>
                            {searchDataMovie.map((category, index) => {
                                return (
                                    <div key={index}>
                                        <ListItem to={`/search/${Object.keys(category).join('')}?query=${categoryMoving}`}>
                                            <SpanKey onClick={(e) => handleName(e, category)}>{Object.keys(category)}
                                            </SpanKey>
                                            <SpanValue>{lengths(category)}
                                            </SpanValue>
                                        </ListItem>
                                    </div>
                                )
                            })}
                        </>
                    ) : null}
                {/* </List> */}
            </Paper>
        </div>
    )
}

export default withRouter(MovingForm);

const Paper = styled(PaperMaterialUI)`
position: sticky; ;
top: 250px;
display:inline-block
max-height:280px;
min-width:220px;
width:240px;
max-width:240px;
margin:10px;
flex-grow:1;
// background-color: black;
border: 1px solid rgba(227,227,227, 1);
border-radius: 8px;
box-sizing: border-box;
`
const List = styled(ListMaterialUI)`
//  padding:25px;

`
const H1 = styled.h1`
background:rgba(1,180,228, 1);
position:relative;
padding: 10px 20px;
top:-22px;
color:#ffffff;
box-sizing: border-box;
`

const ListItem = styled(ListItemMaterialUI).attrs({
    component: Link
})`
position:relative;
trasition: opacity 1s;
font-size:18px;
font-weight: 500;

width: 100%;
padding: 10px 20px;
font-size: 1em;
line-height: 1.0em;
margin: 0;

&:hover {
    background: whitesmoke;
}
`
const SpanKey = styled.span`
font-size:18px;
font-weight: 600;
color:#000;
opacity:0.4;
trasition: opacity 1s;
&:hover {
    background: whitesmoke;
    opacity:1;
}
`

const SpanValue = styled.span`
position:absolute;
color:#000;
font-size:18px;
right:10px;
font-size:13px;
font-weight: 600;
border:0.5px solid #fff;
padding:1px 7px 1px 7px;
margin-left:4px;
border-radius: 2px;


display: inline-flex;
align-items: center;
font-size: 0.8em;
font-weight: 300;
font-family: 'Roboto Mono', monospace;
background-color: rgba(0,0,0,0.08);
padding: 0px 10px;
border-radius: 8px;


trasition: opacity 1s;
&:hover {
    background: whitesmoke;
}
`
