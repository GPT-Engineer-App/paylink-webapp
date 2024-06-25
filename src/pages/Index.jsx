import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box 
      bgImage="url('/images/body-background.jpg')" 
      bgSize="cover" 
      bgPosition="center" 
      minH="100vh"
    >
      <Box 
        display="flex" 
        alignItems="center" 
        pt={{ base: "70px", md: "20px" }} 
        pb={{ base: "70px", md: "20px" }}
      >
        <Container centerContent maxW="container.xl" py={8}>
          <Image src="/images/logo.png" alt="Platapay Logo" boxSize="100px" mb={4} />
          <VStack spacing={4} textAlign="center">
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>Platapay</Heading>
            <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>Home</Text>
            <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>Your Trusted Payment Partner</Text>
            <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>Home</Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;