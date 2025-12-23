import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LoanServices from "./pages/LoanServices";
import Contact from "./pages/Contact";
import FloatingForm from "./components/FloatingForm";
import FloatingActionButton from "./components/FloatingActionButton";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();

  // Scroll to top instantly whenever the path changes
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);

  const openForm = () => {
    console.log("🔥 Opening form...");
    setIsFormOpen(true);
    // Prevent body scroll when form opens
    document.body.style.overflow = "hidden";
  };

  const closeForm = () => {
    console.log("❌ Closing form...");
    setIsFormOpen(false);
    // Restore body scroll when form closes
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <Navbar onApplyClick={openForm} />
      <Routes>
        <Route path="/" element={<Home onApplyClick={openForm} />} />
        <Route path="/about" element={<About onApplyClick={openForm} />} />
        <Route path="/loanservices" element={<LoanServices onApplyClick={openForm} />} />
        <Route path="/contact" element={<Contact onApplyClick={openForm} />} />
      </Routes>
      <FloatingActionButton onClick={openForm} />
      <FloatingForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
}

export default App;
