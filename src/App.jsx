import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Products from "./components/Products";
import Properties from "./components/Properties";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import RealAbout from "./components/RealAbout";
import Agents from "./components/Agents";

const Home = ({ footerRef }) => {
  return (
    <>
      <div className=" w-full py-4 lg:px-20">
      <HeroSection />
        
      </div>
      <div className=" w-full py-4 lg:px-20">
        <About />
        <Products />
        <Properties />
        <Agents/>
      </div>
      <div>
        <Testimonials />
      </div>
      {/* ✅ Footer with ref for scrolling */}
      <div ref={footerRef} className="w-full">
        <Footer />
      </div>
    </>
  );
};

function App() {
  const location = useLocation();
  const footerRef = useRef(null);

  // ✅ Scroll to Footer when "/contact" is visited
  useEffect(() => {
    if (location.pathname === "/contact" && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* ✅ Navbar stays on all pages */}
      <Navbar />

      {/* ✅ Routes for switching pages */}
      <Routes>
        <Route path="/" element={<Home footerRef={footerRef} />} />
        <Route path="/about" element={<RealAbout />} />
        <Route path="/products" element={<Properties />} />
        <Route path="/contact" element={<Home footerRef={footerRef} />} />
      </Routes>

      {/* ✅ Footer stays on all pages (EXCEPT when on "/contact") */}
      
    </>
  );
}

export default App;
