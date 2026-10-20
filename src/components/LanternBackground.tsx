
import React from 'react';

interface LanternBackgroundProps {
  isVisible: boolean;
}

const LanternBackground: React.FC<LanternBackgroundProps> = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/lovable-uploads/9fc95c87-4063-4feb-8578-a69819d09339.png')" }}
      ></div>
    </div>
  );
};

export default LanternBackground;
