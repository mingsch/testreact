
import React from 'react';
import { publicAsset } from "@/lib/publicAsset";

interface LanternBackgroundProps {
  isVisible: boolean;
}

const LanternBackground: React.FC<LanternBackgroundProps> = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url('${publicAsset("/images/outside.jpg")}')` }}
      ></div>
    </div>
  );
};

export default LanternBackground;
