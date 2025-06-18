import React from 'react';

const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => {
  return (
    <img 
      src="/images/tiktok-icon.svg" 
      alt="TikTok"
      className={className}
    />
  );
};

export default TikTokIcon; 