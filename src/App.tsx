import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import Dispensers from "./components/pages/Dispensers";
import "./App.css";
import SmartlineR from "./components/pages/dispensers/pages/SmartlineR";
import SmartlineH from "./components/pages/dispensers/pages/SmartlineH";
import SmartlineC from "./components/pages/dispensers/pages/SmartlineC";
import SmartlineL from "./components/pages/dispensers/pages/SmartlineL";
import SmartlineLX from "./components/pages/dispensers/pages/SmartlineLX";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dispensers" element={<Dispensers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dispensers" element={<Dispensers />} />
          <Route path="dispensers/smartline_r" element={<SmartlineR />} />
          <Route path="dispensers/smartline_h" element={<SmartlineH />} />
          <Route path="dispensers/smartline_c" element={<SmartlineC />} />
          <Route path="dispensers/smartline_l" element={<SmartlineL />} />
          <Route path="dispensers/smartline_lx" element={<SmartlineLX />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
