import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import LoanServices from "./pages/LoanServices";
import Contact from "./pages/Contact";
import FloatingForm from "./components/FloatingForm";
import FloatingActionButton from "./components/FloatingActionButton";
import "./App.css";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll to top instantly whenever the page changes
  useEffect(() => {
    window.scroll(0, 0);
  }, [currentPage]);

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

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "about":
        return <About onApplyClick={openForm} navigateTo={navigateTo} />;
      case "loanservices":
        return <LoanServices onApplyClick={openForm} navigateTo={navigateTo} />;
      case "contact":
        return <Contact onApplyClick={openForm} navigateTo={navigateTo} />;
      case "home":
      default:
        return <Home onApplyClick={openForm} navigateTo={navigateTo} />;
    }
  };

  return (
    <>
      {renderCurrentPage()}
      <FloatingActionButton onClick={openForm} />
      <FloatingForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
}

export default App;
