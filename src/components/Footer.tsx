


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ming-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white font-serif">Ming's</h3>
            <p className="text-white/80 mb-4">
              Authentic Chinese cuisine served in a warm and welcoming atmosphere. Proudly serving Waterloo for over 25 years.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Info</h4>
            <address className="not-italic">
              <p className="text-white/80 mb-2">
                465 Phillip Street,<br />
                Waterloo, ON N2L 6C7
              </p>
              <p className="text-white/80 mb-2">
                <a href="tel:+15198887460" className="hover:text-white text-lg font-medium">
                  (519) 888-7460
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Business Hours</h4>
            <div className="text-white/80 space-y-2">
              <div className="grid grid-cols-[1fr,auto] gap-x-8">
                <span>Monday</span>
                <span className="whitespace-nowrap text-right">11:00 AM - 8:30 PM</span>
              </div>
              
              <div className="grid grid-cols-[1fr,auto] gap-x-8">
                <span>Tuesday</span>
                <span className="whitespace-nowrap text-right">11:00 AM - 8:30 PM</span>
              </div>
              
              <div className="grid grid-cols-[1fr,auto] gap-x-8">
                <span>Wednesday</span>
                <span className="whitespace-nowrap text-right">11:00 AM - 8:30 PM</span>
              </div>
              
              <div className="grid grid-cols-[1fr,auto] gap-x-8">
                <span>Thursday</span>
                <span className="whitespace-nowrap text-right">11:00 AM - 8:30 PM</span>
              </div>
              
              <div className="grid grid-cols-[1fr,auto] gap-x-8">
                <span>Friday</span>
                <span className="whitespace-nowrap text-right">11:00 AM - 8:30 PM</span>
              </div>
              
              <div className="grid grid-cols-[1fr,auto] gap-x-8">
                <span>Saturday</span>
                <span className="whitespace-nowrap text-right">3:30 PM - 8:30 PM</span>
              </div>
              
              <div className="grid grid-cols-[1fr,auto] gap-x-8">
                <span>Sunday & Holidays</span>
                <span className="whitespace-nowrap text-right">3:30 PM - 8:30 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Ming's Chinese Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
