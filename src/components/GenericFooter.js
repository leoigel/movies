import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const GenericFooter = () => {
    return (
        <div style={{marginTop:'75px'}}>
            <Footer>
                <LinkTo href={`/resume.pdf`} download><ContactMailIcon /></LinkTo>
                <LinkTo href={`https://github.com/leoigel/movies`}><GitHubIcon /></LinkTo>
                <LinkTo href={`https://linkedin.com/in/leonardoigel`}><LinkedInIcon /></LinkTo>
            </Footer>
        </div>
    )
}
export default GenericFooter;

const Footer = styled.footer`
position: fixed;
bottom: 0;
width:100%;
padding: 1rem 1rem 1rem 0.5rem;
background-color: #efefef;
text-align: center;
opacity:0.5;

`
const LinkTo = styled.a`
margin-left:5px;
`