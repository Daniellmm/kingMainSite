import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import Funding from "./pages/Funding";
import Insurance from "./pages/Insurance";
import LaserFund from "./pages/LaserFund";
import GGEI from "./pages/GGEI";
import Preloader from "./component/Preloader";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// Create a context for loading state
const LoadingContext = createContext();

// Component to handle route changes
function RouteChangeListener() {
  const location = useLocation();
  const { setIsLoading } = useContext(LoadingContext);
  
  useEffect(() => {
    // Show preloader when route changes
    setIsLoading(true);
    
    // Hide preloader after delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5555); // Reduced from 5555ms for better UX
    
    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading]);
  
  return null;
}

function AppContent() {
  const { isLoading } = useContext(LoadingContext);
  
  return (
    <>
      <ScrollToTop />
      <RouteChangeListener />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/ggei" element={<GGEI />} />
            <Route path="/laserfund" element={<LaserFund />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <Router>
        <AppContent />
      </Router>
    </LoadingContext.Provider>
  );
}

export default App;