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


const preloaderContent = {
  '/': {
    mainText: ['GET', 'UP TO', '$4M'],
    subText: 'IN FAST, RELIABLE FUNDING FOR YOU AND YOUR CUSTOMERS'
  },
  '/funding': {
    mainText: ['Start Your',  'Own','Funding Business'],
    subText: 'Earn Up To 6 Figures + In Consulting Fees'
  },
  '/insurance': {
    mainText: ['PROTECT', 'YOUR', 'INVESTMENT'],
    subText: 'COMPREHENSIVE INSURANCE COVERAGE FOR PEACE OF MIND'
  },
  '/laserfund': {
    mainText: ['Laser', 'Fund', 'PAMM'],
    subText: ' Learn While You Earn'
  },
  '/ggei': {
    mainText: ['BE', 'YOUR OWN', 'BANK'],
    subText: 'SUSTAINABLE FUNDING FOR ECO-FRIENDLY BUSINESS VENTURES'
  },
};

function RouteChangeListener() {
  const location = useLocation();
  const { setIsLoading, setCurrentPath } = useContext(LoadingContext);
  
  useEffect(() => {
   
    setCurrentPath(location.pathname);
    
    
    setIsLoading(true);
    
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); 
    
    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading, setCurrentPath]);
  
  return null;
}

function AppContent() {
  const { isLoading, currentPath } = useContext(LoadingContext);
  
  
  const content = preloaderContent[currentPath] || preloaderContent['/'];
  
  return (
    <>
      <ScrollToTop />
      <RouteChangeListener />
      {isLoading ? (
        <Preloader mainText={content.mainText} subText={content.subText} />
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
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, currentPath, setCurrentPath }}>
      <Router>
        <AppContent />
      </Router>
    </LoadingContext.Provider>
  );
}

export default App;