import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex justify="space-around">
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
      <Link as={NavLink} to="/hitpay-features" color="white" _hover={{ textDecoration: "none" }}>
        HitPay Features
      </Link>
    </Flex>
  </Box>
);

export default Navbar;