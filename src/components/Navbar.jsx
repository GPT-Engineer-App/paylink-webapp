import { Box, Flex, Link, Image, IconButton, useDisclosure, VStack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLinks = () => (
    <>
      <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none" }} mr={4}>
        Home
      </Link>
      <Link as={NavLink} to="/online-payments" color="white" _hover={{ textDecoration: "none" }} mr={4}>
        Online Payments
      </Link>
      <Link as={NavLink} to="/bills-payments" color="white" _hover={{ textDecoration: "none" }} mr={4}>
        Bills Payments
      </Link>
      <Link as={NavLink} to="/remittance" color="white" _hover={{ textDecoration: "none" }} mr={4}>
        Remittance
      </Link>
      <Link as={NavLink} to="/hitpay-features" color="white" _hover={{ textDecoration: "none" }}>
        HitPay Features
      </Link>
    </>
  );

  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Image src="https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-500-x-500-px.png?w=500" alt="Platapay Logo" boxSize="50px" mr={4} />
        <Flex display={{ base: "none", md: "flex" }}>
          <NavLinks />
        </Flex>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
          variant="outline"
          color="white"
        />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={8}>
              <NavLinks />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;