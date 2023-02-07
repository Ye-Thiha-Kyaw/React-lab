import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import styles from "./myStyles.module.css"
import photo1 from "../images/me.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import TypeWriter from "./typeWriter";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const greeting = "Hello, I am Thiha!";
const bio1 = "I used to be a Telecom engineer.";
const bio2 = `"I made a career change from telecom engineering to web development."`;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    
    <Avatar className="align-conten" src='https://i.pravatar.cc/150?img=8' width="170px" height="190px" />
    <div className={styles.header1}>
    <TypeWriter  text={greeting} typingSpeed={100} />
    </div>
    
   
 
   
   <Container >
        <Row className="justify-content-center flex  text-center">
          
          <Col ><div className={styles.header1}><TypeWriter  text={bio1} typingSpeed={100} delay={3000} /></div></Col>
         
        </Row>
        <Row className="justify-content-center flex mt-3">
          <Col xs={3}></Col>
          <Col xs={6} ><div className={styles.header2}><TypeWriter  text={bio2} typingSpeed={100} delay={7000} /></div></Col>
          <Col xs={2}></Col>
        </Row>
     
      
    </Container>
   
  </FullScreenSection>
);

export default LandingSection;
