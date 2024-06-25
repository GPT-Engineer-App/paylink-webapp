import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Flex, Box, Text, VStack, useColorMode, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Index from "./pages/Index.jsx";
import OnlinePayments from "./pages/OnlinePayments.jsx";
import BillsPayments from "./pages/BillsPayments.jsx";
import Remittance from "./pages/Remittance.jsx";
import EWallet from "./pages/EWallet.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const Footer = () => (
  <Box 
    as="footer" 
    position="fixed" 
    bottom={0} 
    left={0} 
    right={0} 
    bg="brand.500" 
    color="white" 
    py={2}
    display={{ base: "block", md: "none" }}
    zIndex={1000}
  >
    <VStack spacing={1}>
      <Text fontSize="sm">© 2023 Platapay</Text>
      <Flex justifyContent="center" mt={2}>
        <Box as="a" href="https://facebook.com" target="_blank" mx={2}>
          <FaFacebook />
        </Box>
        <Box as="a" href="https://twitter.com" target="_blank" mx={2}>
          <FaTwitter />
        </Box>
        <Box as="a" href="https://instagram.com" target="_blank" mx={2}>
          <FaInstagram />
        </Box>
      </Flex>
      <Text fontSize="xs">All rights reserved</Text>
    </VStack>
  </Box>
);

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} position="fixed" top={4} right={4}>
      {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

function App() {
  return (
    <Router>
      <Flex flexDirection="column" minHeight="100vh">
        <Navbar />
        <ThemeToggle />
        <Box 
          flex={1} 
          mt={{ base: "60px", md: 0 }} 
          ml={{ base: 0, md: "250px" }}
          mb={{ base: "60px", md: 0 }}
        >
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/online-payments" element={<OnlinePayments />} />
            <Route exact path="/bills-payments" element={<BillsPayments />} />
            <Route exact path="/remittance" element={<Remittance />} />
            <Route exact path="/e-wallet" element={<EWallet />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Box>
        <Footer />
      </Flex>
    </Router>
  );
}

export default App;