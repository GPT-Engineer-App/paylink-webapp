import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
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
    <Box p={4}>
      <Heading>HitPay Features</Heading>
      <VStack spacing={4} mt={4}>
        {features.map((feature, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <Heading size="md">{feature.title}</Heading>
            <Text mt={2}>{feature.description}</Text>
          </Box>
        ))}
      </VStack>
      <Button mt={4} colorScheme="teal">Learn More</Button>
    </Box>
  );
};

export default HitPayFeatures;