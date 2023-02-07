import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


// const Card = ({ title, description, imageSrc }) => {
//   // Implement the UI for the Card component according to the instructions.
//   // You should be able to implement the component with the elements imported above.
//   // Feel free to import other UI components from Chakra UI if you wish to.
//   return (
//     <VStack p={5} shadow="md" borderWidth="1px" rounded="lg" overflow="hidden">
//       <Image src={imageSrc} alt={title} />
//       <HStack py={5}>
//         <Text fontWeight="bold" fontSize="xl">{title}</Text>
//         <FontAwesomeIcon icon={faArrowRight} />
//       </HStack>
//       <Text>{description}</Text>
//     </VStack>
//   );
// };

// export default Card;

import React from "react";
import { Card , Container, Row, Col } from "react-bootstrap";

const Cards = ({ title, description, imageSrc }) => {
  return (
    <Container className="text-dark">
      <Row>
        <Col xs={12} md={12}>
          <Card>
            <Card.Img variant="top" src={imageSrc} />
            <Card.Body>
              <Card.Title >{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <div className="py-3">
              <a href="" >See more  <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
              </div>
              
            </Card.Body>
          </Card>
        </Col>
        {/* <Col xs={12} md={6}>
          <BSCard>
            <BSCard.Img variant="top" src={imageSrc} />
            <BSCard.Body>
              <BSCard.Title>{title}</BSCard.Title>
              <BSCard.Text>{description}</BSCard.Text>
            </BSCard.Body>
          </BSCard>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Cards;
