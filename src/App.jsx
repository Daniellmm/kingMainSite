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
import PageTransition from "./component/PageTransition"; 


const LoadingContext = createContext();


function RouteChangeListener() {
  const location = useLocation();
  const { setIsLoading } = useContext(LoadingContext);
  
  useEffect(() => {
    
    setIsLoading(true);
    
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5555); 
    
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
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/funding" element={
              <PageTransition>
                <Funding />
              </PageTransition>
            } />
            <Route path="/insurance" element={
              <PageTransition>
                <Insurance />
              </PageTransition>
            } />
            <Route path="/ggei" element={
              <PageTransition>
                <GGEI />
              </PageTransition>
            } />
            <Route path="/laserfund" element={
              <PageTransition>
                <LaserFund />
              </PageTransition>
            } />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5555); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <Router>
        <AppContent />
      </Router>
    </LoadingContext.Provider>
  );
}

export default App;