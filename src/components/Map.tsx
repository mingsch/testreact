
import { useEffect, useRef, useState } from "react";
import { MapPin, Map as MapIcon } from "lucide-react";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<"map" | "street">("map");
  
  useEffect(() => {
    if (mapRef.current) {
      // Clear existing content
      mapRef.current.innerHTML = "";
      
      const iframe = document.createElement("iframe");
      
      if (viewMode === "map") {
        // Regular map view
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.5893163839884!2d-80.54382108823567!3d43.47440846201995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf41c7dae4e41%3A0x389d525e6ae0527c!2s465%20Phillip%20St%2C%20Waterloo%2C%20ON%20N2L%206C7!5e0!3m2!1sen!2sca!4v1689349871412!5m2!1sen!2sca";
      } else {
        // Street view
        iframe.src = "<https://www.google.com/maps/embed?pb=!4v1792551291916!6m8!1m7!1slvJn4TGVeUVJeCA5ze3u9A!2m2!1d43.48424081772034!2d-80.54068096312923!3f327.5471050821499!4f-8.621350221561471!5f0.7820865974627469";
      }
      
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.style.border = "0";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      
      mapRef.current.appendChild(iframe);
    }
  }, [viewMode]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <div ref={mapRef} className="h-96 w-full"></div>
      
      <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-xs">
        <div className="flex items-start gap-3">
          <div className="bg-ming-red rounded-full p-2 mt-1">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-ming-black mb-1">Ming's Chinese Restaurant</h3>
            <p className="text-sm text-ming-dark/80">465 Phillip Street, Waterloo, ON N2L 6C7</p>
            <p className="text-sm text-ming-dark/80 mt-1">
              <a 
                href="https://goo.gl/maps/5sY3Z3Z5Z3Z5Z3Z5A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ming-red hover:underline"
              >
                Get Directions
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* View toggle controls */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex">
          <button 
            onClick={() => setViewMode("map")} 
            className={`px-3 py-2 flex items-center gap-1 text-sm transition-colors ${viewMode === "map" ? "bg-ming-red text-white" : "bg-white text-ming-black hover:bg-gray-100"}`}
          >
            <MapIcon className="h-4 w-4" />
            <span>Map</span>
          </button>
          <button 
            onClick={() => setViewMode("street")} 
            className={`px-3 py-2 flex items-center gap-1 text-sm transition-colors ${viewMode === "street" ? "bg-ming-red text-white" : "bg-white text-ming-black hover:bg-gray-100"}`}
          >
            <MapPin className="h-4 w-4" />
            <span>Street View</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
