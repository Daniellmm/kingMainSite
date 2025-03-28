import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Funding from "./pages/Funding";
import Insurance from "./pages/Insurance";
import LaserFund from "./pages/LaserFund";
import Blog from "./pages/Blog";
import GGEI from "./pages/GGEI";
import Preloader from "./component/Preloader";
import NavBar from "./component/NavBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader completion time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5555);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ggei" element={<GGEI />} />
            <Route path="/laserfund" element={<LaserFund />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
