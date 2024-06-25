import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, Icon, useColorModeValue, Button, Flex, HStack, Divider } from "@chakra-ui/react";
import { FaShoppingCart, FaUtensils, FaPiggyBank, FaWallet, FaMobileAlt, FaShieldAlt, FaMoneyBillWave, FaBell, FaLifeRing, FaBullhorn } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("skyblue", "gray.800");

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
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>Dashboard</Heading>
            <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>Welcome to your Dashboard</Text>
            <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>Here you can manage all your financial activities efficiently and securely.</Text>
            <Button colorScheme="teal" size="lg" mt={4}>Get Started</Button>
          </VStack>
          <Box mt={8} p={4} bg="whiteAlpha.800" borderRadius="md" boxShadow="md">
            <Heading fontSize={{ base: "xl", md: "2xl" }}>Quick Actions</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} mt={4}>
              <Box p={4} bg="blue.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Icon as={FaMobileAlt} w={8} h={8} mb={2} />
                <Text fontSize="lg">Mobile Payments</Text>
                <Text fontSize="md">Pay using your mobile device.</Text>
              </Box>
              <Box p={4} bg="green.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Icon as={FaShieldAlt} w={8} h={8} mb={2} />
                <Text fontSize="lg">Secure</Text>
                <Text fontSize="md">Your transactions are safe with us.</Text>
              </Box>
              <Box p={4} bg="yellow.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Icon as={FaMoneyBillWave} w={8} h={8} mb={2} />
                <Text fontSize="lg">Low Fees</Text>
                <Text fontSize="md">Enjoy competitive rates and low fees.</Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box mt={8} p={4} bg="whiteAlpha.800" borderRadius="md" boxShadow="md">
            <Heading fontSize={{ base: "xl", md: "2xl" }} mb={4}>Your Accounts</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
              <Box p={4} bg="blue.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Icon as={FaWallet} w={8} h={8} mb={2} />
                <Text fontSize="lg">E-Wallet</Text>
                <Text fontSize="md">Manage your funds conveniently.</Text>
              </Box>
              <Box p={4} bg="green.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Icon as={FaUtensils} w={8} h={8} mb={2} />
                <Text fontSize="lg">Groceries</Text>
                <Text fontSize="md">Pay for your groceries with ease.</Text>
              </Box>
              <Box p={4} bg="yellow.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Icon as={FaShoppingCart} w={8} h={8} mb={2} />
                <Text fontSize="lg">Shopping</Text>
                <Text fontSize="md">Shop online and pay securely.</Text>
              </Box>
              <Box p={4} bg="purple.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Icon as={FaPiggyBank} w={8} h={8} mb={2} />
                <Text fontSize="lg">Savings</Text>
                <Text fontSize="md">Save money with our high interest rates.</Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box mt={8} p={4} bg="whiteAlpha.800" borderRadius="md" boxShadow="md">
            <Heading fontSize={{ base: "xl", md: "2xl" }} mb={4}>Financial Overview</Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>Get a quick overview of your financial status.</Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
              <Box p={4} bg="blue.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Text fontSize="lg">Total Balance</Text>
                <Text fontSize="2xl">$5000</Text>
              </Box>
              <Box p={4} bg="green.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Text fontSize="lg">Monthly Expenses</Text>
                <Text fontSize="2xl">$2000</Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box mt={8} p={4} bg="whiteAlpha.800" borderRadius="md" boxShadow="md">
            <Heading fontSize={{ base: "xl", md: "2xl" }} mb={4}>Expense Breakdown</Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>See where your money is going.</Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
              <Box p={4} bg="blue.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Text fontSize="lg">Rent</Text>
                <Text fontSize="2xl">$1000</Text>
              </Box>
              <Box p={4} bg="green.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Text fontSize="lg">Groceries</Text>
                <Text fontSize="2xl">$500</Text>
              </Box>
              <Box p={4} bg="yellow.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Text fontSize="lg">Utilities</Text>
                <Text fontSize="2xl">$300</Text>
              </Box>
              <Box p={4} bg="purple.100" borderRadius="md" boxShadow="md" textAlign="center">
                <Text fontSize="lg">Entertainment</Text>
                <Text fontSize="2xl">$200</Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box mt={8} p={4} bg="whiteAlpha.800" borderRadius="md" boxShadow="md">
            <Heading fontSize={{ base: "xl", md: "2xl" }} mb={4}>Notifications</Heading>
            <HStack spacing={4}>
              <Icon as={FaBell} w={8} h={8} />
              <Text fontSize={{ base: "md", md: "lg" }}>You have 3 new notifications.</Text>
            </HStack>
          </Box>
          <Box mt={8} p={4} bg="whiteAlpha.800" borderRadius="md" boxShadow="md">
            <Heading fontSize={{ base: "xl", md: "2xl" }} mb={4}>Support</Heading>
            <HStack spacing={4}>
              <Icon as={FaLifeRing} w={8} h={8} />
              <Text fontSize={{ base: "md", md: "lg" }}>Need help? Contact our support team.</Text>
            </HStack>
          </Box>
          <Box mt={8} p={4} bg="whiteAlpha.800" borderRadius="md" boxShadow="md">
            <Heading fontSize={{ base: "xl", md: "2xl" }} mb={4}>Promotions</Heading>
            <HStack spacing={4}>
              <Icon as={FaBullhorn} w={8} h={8} />
              <Text fontSize={{ base: "md", md: "lg" }}>Check out our latest promotions.</Text>
            </HStack>
          </Box>
          <Box mt={8} p={4} bg="whiteAlpha.800" borderRadius="md" boxShadow="md" textAlign="center">
            <Image src="/images/platapay-logo.png" alt="Platapay Logo" boxSize="50px" mb={4} />
            <Text fontSize={{ base: "md", md: "lg" }}>Your trusted financial partner.</Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;