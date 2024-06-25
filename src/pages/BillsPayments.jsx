import { Box, Heading, Text, Container } from "@chakra-ui/react";

const BillsPayments = () => (
  <Container maxW="container.xl" py={8}>
    <Box>
      <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>Bills Payments</Heading>
      <Text mt={4} fontSize={{ base: "md", md: "lg" }}>Easily pay your bills using Platapay.</Text>
    </Box>
  </Container>
);

export default BillsPayments;