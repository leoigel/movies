import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const GenericFooter = () => {
    return (
        <Footer>
            <LinkTo href={`/resume.pdf`} download><ContactMailIcon /></LinkTo>
            <LinkTo href={`https://github.com/leoigel`}><GitHubIcon /></LinkTo>
            <LinkTo href={`https://linkedin.com/in/leonardoigel`}><LinkedInIcon /></LinkTo>
        </Footer>
    )
}
export default GenericFooter;

const Footer = styled.footer`
position: fixed;
right: 0;
bottom: 0;
left: 0;
padding: 1rem 1rem 1rem 0.5rem;
background-color: #efefef;
text-align: center;
opacity:0.5;

`
const LinkTo = styled.a`
margin-left:5px;
`