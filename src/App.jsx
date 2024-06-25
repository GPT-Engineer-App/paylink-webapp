import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Flex, Box, useColorMode, Button, IconButton } from "@chakra-ui/react";
import { FaHome, FaExchangeAlt, FaMoneyBill, FaBell, FaSun, FaMoon, FaUser, FaComments } from "react-icons/fa";
import Index from "./pages/Index.jsx";
import Settings from "./pages/Settings.jsx";
import OnlinePayments from "./pages/OnlinePayments.jsx";
import BillsPayments from "./pages/BillsPayments.jsx";
import Remittance from "./pages/Remittance.jsx";
import EWallet from "./pages/EWallet.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} position="fixed" top={4} right={4}>
      {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

const BottomNavBar = () => (
  <Box 
    as="nav" 
    position="fixed" 
    bottom={0} 
    left={0} 
    right={0} 
    bg="brand.500" 
    color="white" 
    borderTop="1px solid #eaeaea" 
    display={{ base: "flex", md: "none" }} 
    justifyContent="space-around" 
    py={2} 
    zIndex={1000}
  >
    <IconButton icon={<FaHome size="24px" />} aria-label="Home" variant="outline" color="white" />
    <IconButton icon={<FaSun size="24px" />} aria-label="Theme" variant="outline" color="white" />
    <IconButton icon={<FaUser size="24px" />} aria-label="Profile" variant="outline" color="white" />
    <IconButton icon={<FaComments size="24px" />} aria-label="Chat" variant="outline" color="white" />
  </Box>
);

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
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </Box>
        <BottomNavBar />
      </Flex>
    </Router>
  );
}

export default App;