import { Box, Heading, Text, VStack, Button, Container, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const HitPayFeatures = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // Fetch features from an API or define them statically
    axios.get('/api/hitpay-features')
      .then(response => setFeatures(response.data))
      .catch(error => console.error('Error fetching features:', error));
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <Box>
        <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>HitPay Features</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={8}>
          {features.map((feature, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
              <Heading size="md">{feature.title}</Heading>
              <Text mt={2}>{feature.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Button mt={8} colorScheme="teal" size={{ base: "md", md: "lg" }}>Learn More</Button>
      </Box>
    </Container>
  );
};

export default HitPayFeatures;