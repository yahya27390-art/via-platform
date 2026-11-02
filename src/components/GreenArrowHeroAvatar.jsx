import React, { useState, useRef } from 'react';

export default function GreenArrowHeroAvatar() {
  const containerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle natural 3D tilt (-10deg to 10deg)
    const rotateX = -(y / (rect.height / 2)) * 10;
    const rotateY = (x / (rect.width / 2)) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center select-none py-6 sm:py-8"
      style={{ perspective: 1200 }}
    >
      {/* 1. Subtle, Soft Ambient Backlight Halo (Behind Avatar Only) */}
      <div 
        className={`absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full bg-emerald-500/12 blur-[100px] pointer-events-none transition-transform duration-700 ${
          isHovered ? 'scale-110 opacity-100' : 'opacity-70'
        }`} 
      />

      {/* 2. 100% Free-Floating, Borderless 3D Mascot */}
      <div 
        className="relative z-10 max-w-[340px] sm:max-w-[420px] w-full transition-transform duration-200 ease-out flex flex-col items-center"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovered ? 1.03 : 1}, ${isHovered ? 1.03 : 1}, 1)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Holographic Laser Beam Accent (Subtle, sleek) */}
        <div className="cyber-scanner rounded-full opacity-50" />

        {/* Pure 3D Character (Zero boxes, Zero frames, Zero stickers) */}
        <div className="relative w-full flex items-center justify-center">
          <img
            src="./media/green-arrow-avatar-hero-transparent.png"
            alt="Green Arrow AI Performance Mascot"
            className="robo-avatar w-full h-auto max-h-[500px] object-contain select-none transition-transform duration-500"
            onError={(e) => {
              e.target.src = './media/Robot.webp';
            }}
          />
        </div>

        {/* Realistic Soft Contact Shadow on Floor */}
        <div className="w-48 h-3.5 rounded-full bg-black/80 blur-sm mx-auto mt-1" />
        <div className="w-56 h-2 rounded-full bg-emerald-400/20 blur-md mx-auto -mt-1.5" />
      </div>
    </div>
  );
}
