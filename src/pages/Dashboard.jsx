import { Box, Flex, Heading, Text, Image, VStack, Link, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const SidebarContent = () => (
    <VStack align="start" spacing={4}>
      <Link as={NavLink} to="/dashboard" color="black" _hover={{ textDecoration: "none" }}>
        Dashboard
      </Link>
      <Link as={NavLink} to="/profile" color="black" _hover={{ textDecoration: "none" }}>
        View Profile
      </Link>
      <Link as={NavLink} to="/statement-of-account" color="black" _hover={{ textDecoration: "none" }}>
        Statement of Account
      </Link>
      <Link as={NavLink} to="/allocate-funds" color="black" _hover={{ textDecoration: "none" }}>
        Allocate Funds
      </Link>
      <Link as={NavLink} to="/point-of-sales" color="black" _hover={{ textDecoration: "none" }}>
        Point of Sales
      </Link>
      <Link as={NavLink} to="/library" color="black" _hover={{ textDecoration: "none" }}>
        Library
      </Link>
      <Link as={NavLink} to="/video-tutorials" color="black" _hover={{ textDecoration: "none" }}>
        Video Tutorial Collections
      </Link>
    </VStack>
  );

  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Box display={{ base: "none", md: "block" }} w={{ md: "20%" }} bg="gray.100" p={4}>
        <SidebarContent />
      </Box>
      <Box display={{ base: "block", md: "none" }} p={4}>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="outline"
        />
      </Box>
      <Box w={{ base: "100%", md: "80%" }} p={4}>
        <Heading>Dashboard</Heading>
        <Text mt={2}>Welcome to your Dashboard page!</Text>
        <Image src="/images/dashboard-banner.png" alt="Dashboard Banner" mt={4} w="100%" />
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Dashboard;