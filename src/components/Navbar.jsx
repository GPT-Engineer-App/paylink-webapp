import React, { useEffect } from "react";
import { Box, Flex, Link, Image, IconButton, useDisclosure, VStack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useBreakpointValue, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdNotifications, MdSettings, MdEmail } from "react-icons/md";
import mainLogo from '../../public/images/main-logo.png';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [notifications, setNotifications] = React.useState([
    "Notification 1",
    "Notification 2",
    "Notification 3"
  ]);

  const logoSrc = mainLogo;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.chakra-drawer__content')) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const NavLinks = () => (
    <VStack align="stretch" spacing={4}>
      <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link as={NavLink} to="/online-payments" color="white" _hover={{ textDecoration: "none" }}>
        Online Payments
      </Link>
      <Link as={NavLink} to="/bills-payments" color="white" _hover={{ textDecoration: "none" }}>
        Bills Payments
      </Link>
      <Link as={NavLink} to="/remittance" color="white" _hover={{ textDecoration: "none" }}>
        Remittance
      </Link>
      <Link as={NavLink} to="/e-wallet" color="white" _hover={{ textDecoration: "none" }}>
        E-Wallet
      </Link>
      <Link as={NavLink} to="/settings" color="white" _hover={{ textDecoration: "none" }}>
        Settings
      </Link>
    </VStack>
  );

  return (
    <Flex position="fixed" top={0} left={0} right={0} zIndex={1000}>
      {/* Sidebar for tablet and desktop */}
      <Box
        display={{ base: "none", md: "block" }}
        w="250px"
        bg="purple.500"
        color="white"
        h="100vh"
        p={4}
        position="fixed"
        left={0}
        top={0}
        zIndex={1001}
        borderBottom="1px solid white"
      >
        <Image src={logoSrc} alt="Platapay Logo" width="100%" height="auto" mb={8} />
        <NavLinks />
      </Box>

      {/* Mobile header */}
      <Box 
        display={{ base: "block", md: "none" }} 
        w="100%" 
        bg="purple.500" 
        p={4}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1001}
        borderBottom="1px solid white"
      >
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <IconButton
              icon={<GiHamburgerMenu />}
              aria-label="Menu"
              variant="outline"
              color="white"
              onClick={onOpen}
            />
            <Image 
              src={logoSrc} 
              alt="Platapay Logo" 
              width={{ base: "50px", md: "100px" }} 
              height={{ base: "auto", md: "auto" }} 
              ml={2}
            />
          </Flex>
          <Box textAlign="center">
            <Text fontSize="lg" color="white">Cashier Account</Text>
            <Text fontSize="sm" color="white">Page Title</Text>
          </Box>
          <Flex>
            <IconButton
              aria-label="Notifications"
              icon={<MdNotifications />}
              variant="outline"
              color="white"
              mr={2}
            />
            <IconButton
              aria-label="Email"
              icon={<MdEmail />}
              variant="outline"
              color="white"
            />
          </Flex>
        </Flex>
      </Box>

      {/* Desktop header */}
      <Box
        display={{ base: "none", md: "block" }}
        w="100%"
        bg="purple.500"
        p={4}
        position="fixed"
        top={0}
        left="250px"
        right={0}
        zIndex={1001}
        borderBottom="1px solid white"
      >
        <Flex justify="space-between" align="center">
          <Box textAlign="center">
            <Text fontSize="lg" color="white">Cashier Account</Text>
            <Text fontSize="sm" color="white">Page Title</Text>
          </Box>
          <Flex align="center">
            <Box color="white" mr={4}>
              <Text>User Role: Admin</Text>
              <Text>Balance: $1000</Text>
            </Box>
            <Menu>
              <MenuButton as={Button} variant="outline" color="white">
                <MdNotifications />
              </MenuButton>
              <MenuList>
                {notifications.map((notification, index) => (
                  <MenuItem key={index}>{notification}</MenuItem>
                ))}
              </MenuList>
            </Menu>
            <IconButton
              aria-label="Settings"
              icon={<MdSettings />}
              variant="outline"
              color="white"
              ml={4}
            />
          </Flex>
        </Flex>
      </Box>

      {/* Mobile menu drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen && isMobile}>
        <DrawerOverlay />
        <DrawerContent bg="purple.500">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={8}>
              <NavLinks />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;