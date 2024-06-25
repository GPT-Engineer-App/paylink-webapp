import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import OnlinePayments from "./pages/OnlinePayments.jsx";
import BillsPayments from "./pages/BillsPayments.jsx";
import Remittance from "./pages/Remittance.jsx";
import EWallet from "./pages/EWallet.jsx";
import HitPayFeatures from "./pages/HitPayFeatures.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/online-payments" element={<OnlinePayments />} />
        <Route exact path="/bills-payments" element={<BillsPayments />} />
        <Route exact path="/remittance" element={<Remittance />} />
        <Route exact path="/e-wallet" element={<EWallet />} />
        <Route exact path="/hitpay-features" element={<HitPayFeatures />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;