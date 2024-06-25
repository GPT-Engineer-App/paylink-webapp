import { Box, Heading, Text, Container } from "@chakra-ui/react";

const EWallet = () => (
  <Box ml={{ base: 0, md: "250px" }}>
    <Container maxW="container.xl" py={8}>
      <Box>
        <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>E-Wallet</Heading>
        <Text mt={4} fontSize={{ base: "md", md: "lg" }}>Manage your funds conveniently with Platapay's e-wallet.</Text>
      </Box>
    </Container>
  </Box>
);

export default EWallet;