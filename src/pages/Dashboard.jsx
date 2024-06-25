import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box ml={{ base: 0, md: "250px" }} p={4}>
      <Heading>Dashboard</Heading>
      <Text mt={2}>Welcome to your Dashboard page!</Text>
      <Image src="/images/dashboard-banner.png" alt="Dashboard Banner" mt={4} w="100%" />
    </Box>
  );
};

export default Dashboard;