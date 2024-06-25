import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Flex, Box, useColorMode, Button, IconButton, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaHome, FaSun, FaUser, FaQuestionCircle } from "react-icons/fa";
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

const BottomNavBar = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <Box 
      as="nav" 
      position="fixed" 
      bottom={0} 
      left={0} 
      right={0} 
      bg="purple.500" 
      color="white" 
      borderTop="1px solid white" 
      display={{ base: "flex", md: "none" }} 
      justifyContent="space-around" 
      py={2} 
      zIndex={1000}
    >
      <IconButton 
        icon={<FaHome size="24px" />} 
        aria-label="Home" 
        variant="outline" 
        color="white" 
        bg={activeIcon === 'home' ? 'purple.700' : 'transparent'}
        onClick={() => handleIconClick('home')}
      />
      <IconButton 
        icon={<FaSun size="24px" />} 
        aria-label="Theme" 
        variant="outline" 
        color="white" 
        bg={activeIcon === 'theme' ? 'purple.700' : 'transparent'}
        onClick={() => handleIconClick('theme')}
      />
      <IconButton 
        icon={<FaUser size="24px" />} 
        aria-label="Profile" 
        variant="outline" 
        color="white" 
        bg={activeIcon === 'profile' ? 'purple.700' : 'transparent'}
        onClick={() => handleIconClick('profile')}
      />
      <IconButton 
        icon={<FaQuestionCircle size="24px" />} 
        aria-label="Help" 
        variant="outline" 
        color="white" 
        bg={activeIcon === 'help' ? 'purple.700' : 'transparent'}
        onClick={() => handleIconClick('help')}
      />
    </Box>
  );
};

function App() {
  useEffect(() => {
    document.title = "Cashier Account";
  }, []);

  return (
    <Router>
      <Flex flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box 
          bg="gray.100" 
          w="100%" 
          p={4} 
          display={{ base: "none", md: "block" }}
        >
          <Heading as="h1" size="lg">Cashier Account</Heading>
          <Text fontSize="md">Page Name</Text>
        </Box>
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