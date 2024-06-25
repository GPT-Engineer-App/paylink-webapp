import { Box, Heading, Text, Container } from "@chakra-ui/react";

const Settings = () => (
  <Box ml={{ base: 0, md: "250px" }}>
    <Container maxW="container.xl" py={8}>
      <Box>
        <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>Settings</Heading>
        <Text mt={4} fontSize={{ base: "md", md: "lg" }}>Manage your account settings here.</Text>
      </Box>
    </Container>
  </Box>
);

export default Settings;