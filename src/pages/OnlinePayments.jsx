import { Box, Heading, Text, Container } from "@chakra-ui/react";

const OnlinePayments = () => (
  <Container maxW="container.xl" py={8}>
    <Box>
      <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>Online Payments</Heading>
      <Text mt={4} fontSize={{ base: "md", md: "lg" }}>Seamlessly pay for goods and services online with Platapay.</Text>
    </Box>
  </Container>
);

export default OnlinePayments;