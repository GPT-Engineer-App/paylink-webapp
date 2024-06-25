import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaUtensils, FaPiggyBank, FaWallet } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("blue.500", "gray.800");

  return (
    <Box 
      bg={bgColor} 
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      <Box 
        bg="white" 
        p={8} 
        borderRadius="md" 
        boxShadow="xl"
        maxW="container.md"
        w="100%"
      >
        <Container centerContent>
          <Image src="/images/logo.png" alt="Platapay Logo" boxSize="100px" mb={4} />
          <VStack spacing={4} textAlign="center">
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>Platapay</Heading>
            <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>Your Trusted Payment Partner</Text>
          </VStack>
          <Box mt={8} p={4} bg="whiteAlpha.800" borderRadius="md" boxShadow="md">
            <Heading fontSize={{ base: "2xl", md: "3xl" }}>Dive into spending insights</Heading>
          </Box>
          <Box mt={8} p={4} bg="whiteAlpha.800" borderRadius="md" boxShadow="md">
            <Heading fontSize={{ base: "xl", md: "2xl" }}>Financial Overview</Heading>
            <Text fontSize={{ base: "lg", md: "xl" }}>Outgoing: $2000</Text>
            <Text fontSize={{ base: "lg", md: "xl" }}>Incoming: $3000</Text>
          </Box>
          <Box mt={8} p={4} bg="whiteAlpha.800" borderRadius="md" boxShadow="md">
            <Heading fontSize={{ base: "xl", md: "2xl" }} mb={4}>Expense Breakdown</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
              <Box p={4} bg="blue.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Icon as={FaWallet} w={8} h={8} mb={2} />
                <Text fontSize="lg">Regular expenses</Text>
                <Text fontSize="xl">$500</Text>
              </Box>
              <Box p={4} bg="green.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Icon as={FaUtensils} w={8} h={8} mb={2} />
                <Text fontSize="lg">Groceries</Text>
                <Text fontSize="xl">$300</Text>
              </Box>
              <Box p={4} bg="yellow.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Icon as={FaShoppingCart} w={8} h={8} mb={2} />
                <Text fontSize="lg">Variable expenses</Text>
                <Text fontSize="xl">$700</Text>
              </Box>
              <Box p={4} bg="purple.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Icon as={FaPiggyBank} w={8} h={8} mb={2} />
                <Text fontSize="lg">Savings</Text>
                <Text fontSize="xl">$500</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;