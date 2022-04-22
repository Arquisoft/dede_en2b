import React from "react";
import styled from 'styled-components';

const Box = styled.div`
  padding-top: 1%;
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
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

const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

const Footer = () => {

    return ( <Box>
            <Container>
                <Row>
                    <Column>
                        <FooterLink href="#">About Us</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#">About Us</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#">About Us</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>


    )
}



export default Footer;