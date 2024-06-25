import { Box, Heading, Text, Container } from "@chakra-ui/react";

const EWallet = () => (
  <Container maxW="container.xl" py={8}>
    <Box>
      <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>E-Wallet</Heading>
      <Text mt={4} fontSize={{ base: "md", md: "lg" }}>Manage your funds conveniently with Platapay's e-wallet.</Text>
    </Box>
  </Container>
);

export default EWallet;