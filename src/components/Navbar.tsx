
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#hero" 
            className="text-2xl font-bold font-serif"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            <span className={`transition-colors duration-300 ${isScrolled || isMenuOpen ? "text-ming-red" : "text-white"}`}>Ming's</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="nav-link text-black"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="nav-link text-black"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="nav-link text-black"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="nav-link text-black"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("location")}
            className="nav-link text-black"
          >
            Location
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link text-black"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            {isMenuOpen ? (
              <div className="w-6 h-6 relative transform rotate-45">
                <span className="absolute w-full h-0.5 bg-ming-red rounded-sm"></span>
                <span className="absolute w-full h-0.5 bg-ming-red rounded-sm transform -rotate-90"></span>
              </div>
            ) : (
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className="w-full h-0.5 bg-ming-red rounded-sm"></span>
                <span className="w-full h-0.5 bg-ming-red rounded-sm"></span>
                <span className="w-full h-0.5 bg-ming-red rounded-sm"></span>
              </div>
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden py-0"
        }`}
      >
        <div className="container-custom flex flex-col space-y-4">
          <button
            onClick={() => scrollToSection("about")}
            className="nav-link text-ming-black text-lg py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="nav-link text-ming-black text-lg py-2"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="nav-link text-ming-black text-lg py-2"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="nav-link text-ming-black text-lg py-2"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("location")}
            className="nav-link text-ming-black text-lg py-2"
          >
            Location
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link text-ming-black text-lg py-2"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
