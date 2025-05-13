
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    
    if (isHomePage) {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to home and then scroll to section
      // We'll use URL hash to indicate which section to scroll to after navigation
      window.location.href = `/#${sectionId}`;
    }
  };

  // Effect to handle hash navigation when the page loads
  useEffect(() => {
    if (location.hash && isHomePage) {
      const sectionId = location.hash.substring(1); // Remove the # character
      const element = document.getElementById(sectionId);
      if (element) {
        // Small timeout to ensure the page has fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location, isHomePage]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-nav scrolled" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="DiaMate Logo" className="h-10" />
          <span className="ml-2 text-xl font-poppins font-bold text-diamate-bright-blue">DiaMate</span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-diamate-dark-gray hover:text-diamate-bright-blue transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("fitur")}
              className="text-diamate-dark-gray hover:text-diamate-bright-blue transition-colors"
            >
              Fitur
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-diamate-dark-gray hover:text-diamate-bright-blue transition-colors"
            >
              Blog
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("tim")}
              className="text-diamate-dark-gray hover:text-diamate-bright-blue transition-colors"
            >
              Tim
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-diamate-dark-gray hover:text-diamate-bright-blue transition-colors"
            >
              Kontak
            </button>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-diamate-bright-blue font-medium hover:text-diamate-blue transition-colors">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Daftar
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-diamate-dark-gray" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-white ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        } transition-all duration-300 overflow-hidden shadow-nav`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="w-full text-left py-2 text-diamate-dark-gray hover:text-diamate-bright-blue transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("fitur")}
                className="w-full text-left py-2 text-diamate-dark-gray hover:text-diamate-bright-blue transition-colors"
              >
                Fitur
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("blog")}
                className="w-full text-left py-2 text-diamate-dark-gray hover:text-diamate-bright-blue transition-colors"
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("tim")}
                className="w-full text-left py-2 text-diamate-dark-gray hover:text-diamate-bright-blue transition-colors"
              >
                Tim
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("kontak")}
                className="w-full text-left py-2 text-diamate-dark-gray hover:text-diamate-bright-blue transition-colors"
              >
                Kontak
              </button>
            </li>
            <li className="pt-2 flex flex-col space-y-3">
              <Link to="/login" className="text-diamate-bright-blue font-medium hover:text-diamate-blue transition-colors">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
