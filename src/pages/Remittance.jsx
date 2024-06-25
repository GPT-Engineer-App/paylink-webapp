import { Box, Heading, Text, Container } from "@chakra-ui/react";

const Remittance = () => (
  <Box ml={{ base: 0, md: "250px" }}>
    <Container maxW="container.xl" py={8}>
      <Box>
        <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>Remittance</Heading>
        <Text mt={4} fontSize={{ base: "md", md: "lg" }}>Send and receive money with ease using Platapay's remittance service.</Text>
      </Box>
    </Container>
  </Box>
);

export default Remittance;