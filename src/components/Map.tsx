
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
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.5893163839884!2d-80.5407583!3d43.4843017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf3fcd9bf4f01%3A0xd6b20935954db542!2sMing%27s+Chinese+Restaurant!5e0!3m2!1sen!2sca!4v1689349871412!5m2!1sen!2sca";
      } else {
        // Street view
        iframe.src = "https://www.google.com/maps/embed?pb=!4v1689349947183!6m8!1m7!1slvJn4TGVeUVJeCA5ze3u9A!2m2!1d43.4843017!2d-80.5407583!3f327.5471!4f8.6214!5f0.7820865974627469";
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
                href="https://www.google.com/maps/dir//Ming's+Chinese+Restaurant,+465+Phillip+St,+Waterloo,+ON+N2L+6C7/@43.4840778,-80.541486,18.42z/data=!3m1!5s0x882bf3fcd78eb3ed:0x79c1a19db2de80b7!4m16!1m7!3m6!1s0x882bf3fcd9bf4f01:0xd6b20935954db542!2sMing's+Chinese+Restaurant!8m2!3d43.4843017!4d-80.5407583!16s%2Fg%2F1txfpsvt!4m7!1m0!1m5!1m1!1s0x882bf3fcd9bf4f01:0xd6b20935954db542!2m2!1d-80.5407583!2d43.4843017?entry=ttu&g_ep=EgoyMDI2MTAxOC4wIKXMDSoASAFQAw%3D%3D" 
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
