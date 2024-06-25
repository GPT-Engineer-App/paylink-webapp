import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box minHeight="100vh" display="flex" alignItems="center" ml={{ base: 0, md: "250px" }}>
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