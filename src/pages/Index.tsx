
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Services />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
