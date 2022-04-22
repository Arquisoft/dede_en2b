import React from "react";
import styled from 'styled-components';
import logo from '../../img/reactLogo.png';
import "./Footer.css";

const Box = styled.div`
  padding-top: 1.5%;
  padding-bottom:1%;
  background: black;
  position: relative;
  width: 100%;
  margin-top: 2%;
  margin-left:auto;
  margin-right:auto;
 
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
    
    /* background: red; */
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  margin-left:auto;
  margin-right:auto;
  
  width:75%;
  grid-gap: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

const Footer = () => {
    return ( <Box id={"footer"}>
            <Container>
                <Row>
                    <Column>
                        <FooterLink href="https://github.com/Arquisoft/dede_en2b">Code</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="https://arquisoft.github.io/dede_en2b/">Documentation</FooterLink>
                    </Column>
                    <Column>
                        <img className={"reactLogo"} id={"reactLogo"} src={logo} alt="React Logo" />
                    </Column>
                    <Column>
                        <FooterLink href="/about">About Us</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="https://solidproject.org/">SOLID</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>


    )
}



export default Footer;