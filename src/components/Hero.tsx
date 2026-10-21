
import { ArrowDown } from "lucide-react";
import LanternBackground from "./LanternBackground";
import { publicAsset } from "@/lib/publicAsset";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Decorative Chinese lanterns background */}
      <LanternBackground isVisible={true} />
      
      {/* Ming's sign image - full width of the page */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-[-60px] mb-12 relative z-20">
        <img 
          src={publicAsset("/lovable-uploads/6dc18f3f-a534-4c59-8181-c51443f9d4fb.png")}
          alt="Ming's Chinese Restaurant Sign"
          className="w-full h-auto object-contain"
          onLoad={() => console.log("Ming's sign image loaded")}
          onError={(e) => console.error("Ming's sign image error:", e)}
        />
      </div>
      
      <div className="container-custom relative z-20 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-ming-black mb-4 leading-tight">
          Ming's Chinese Restaurant
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-ming-dark/90 max-w-2xl mx-auto mb-8 px-4">
          Authentic Chinese & Canadian cuisine in the heart of Waterloo, Ontario
        </p>
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <button
            onClick={() => {
              const menuSection = document.getElementById("menu");
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-ming-red hover:bg-ming-red/90 text-white px-8 py-4 rounded-md font-medium transition-all duration-300 text-lg w-full sm:w-auto max-w-xs"
          >
            View Our Menu
          </button>
          <a 
            href="tel:+15198887460" 
            className="bg-transparent hover:bg-ming-red hover:text-white border-2 border-ming-red text-ming-red px-8 py-4 rounded-md font-medium transition-all duration-300 text-lg w-full sm:w-auto max-w-xs text-center"
          >
            Call Now: (519) 888-7460
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-ming-black cursor-pointer z-20">
        <button onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
