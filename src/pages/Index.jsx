import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box minHeight="calc(100vh - 72px)" display="flex" alignItems="center">
      <Container centerContent maxW="container.xl" py={8}>
        <VStack spacing={4} textAlign="center">
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>Welcome to Platapay</Heading>
          <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>Your one-stop solution for online payments, bills payments, remittance, and e-wallet services.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;