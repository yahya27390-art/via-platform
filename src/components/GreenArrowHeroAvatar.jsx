import React, { useState, useRef } from 'react';
import { Bot, TrendingUp, Sparkles, Target, Zap } from 'lucide-react';

export default function GreenArrowHeroAvatar() {
  const containerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Calculate normalized rotation (-12deg to 12deg)
    const rotateX = -(y / (rect.height / 2)) * 14;
    const rotateY = (x / (rect.width / 2)) * 14;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const triggerPulse = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 900);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={triggerPulse}
      className="relative flex items-center justify-center cursor-pointer select-none py-6 sm:py-8"
      style={{ perspective: 1200 }}
    >
      {/* 1. Ambient Emerald Nebula Glow */}
      <div 
        className={`absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-emerald-500/35 via-green-500/20 to-teal-500/10 blur-[110px] pointer-events-none transition-all duration-700 ${
          pulseActive ? 'scale-125 opacity-100' : 'opacity-80'
        }`} 
      />

      {/* 2. Cybernetic Rotating HUD Rings */}
      <div 
        className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-emerald-500/25 spin-slow pointer-events-none border-dashed"
        style={{ borderDasharray: '8 12' }}
      />
      <div 
        className="absolute w-[270px] h-[270px] sm:w-[360px] sm:h-[360px] rounded-full border border-emerald-400/20 spin-reverse pointer-events-none" 
      />
      <div 
        className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full border border-green-500/15 spin-slow pointer-events-none" 
      />

      {/* 3. 3D Tiltable Avatar Wrapper */}
      <div 
        className="relative z-10 max-w-[340px] sm:max-w-[420px] w-full transition-transform duration-200 ease-out flex flex-col items-center"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovered ? 1.03 : 1}, ${isHovered ? 1.03 : 1}, 1)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Holographic Laser Scanning Beam */}
        <div className="cyber-scanner rounded-full" />

        {/* Mascot Image with Radial Seamless Edge Vignette */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(5,8,6,0.95)] border border-emerald-500/30 group">
          <img
            src="./media/green-arrow-avatar-hero.jpg"
            alt="Green Arrow AI Performance Mascot"
            className="robo-avatar w-full h-auto max-h-[500px] object-contain transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Fallback to previous Robot.webp if needed
              e.target.src = './media/Robot.webp';
            }}
          />

          {/* Vignette Gradient Overlay to blend seamlessly into background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050806] via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050806]/40 via-transparent to-transparent pointer-events-none" />
          
          {/* Subtle Emerald Inner Rim Glow on Hover */}
          <div className="absolute inset-0 rounded-3xl border-2 border-emerald-400/0 group-hover:border-emerald-400/40 transition-colors duration-500 pointer-events-none" />
        </div>

        {/* Thruster Energy Glow at bottom */}
        <div className="w-44 h-5 rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-md thruster-effect mt-2" />

        {/* 4. Multi-Layered Floating Interactive Badges with 3D Depth */}
        
        {/* Top-Right Badge: Green Arrow Engine */}
        <div 
          className="badge-float absolute -top-4 -right-2 sm:-right-6 px-4 py-2.5 rounded-2xl bg-[#080d0a]/95 border border-emerald-500/50 backdrop-blur-xl shadow-[0_12px_30px_rgba(34,197,94,0.35)] flex items-center gap-3 transition-transform duration-300"
          style={{
            transform: `translate3d(${-rotate.y * 1.5}px, ${-rotate.x * 1.5}px, 45px)`,
          }}
        >
          <div className="relative w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
            <Bot className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-medium">محرك إعلانات الأداء</div>
            <div className="text-xs font-black text-white flex items-center gap-1">
              <span>Green Arrow Engine</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/25 text-emerald-300 font-mono">v4.2</span>
            </div>
          </div>
        </div>

        {/* Bottom-Left Badge: Growth Proof */}
        <div 
          className="badge-float absolute -bottom-3 -left-2 sm:-left-8 px-4 py-2.5 rounded-2xl bg-[#080d0a]/95 border border-emerald-500/50 backdrop-blur-xl shadow-[0_12px_30px_rgba(34,197,94,0.35)] flex items-center gap-3 [animation-delay:1.5s]"
          style={{
            transform: `translate3d(${rotate.y * 1.8}px, ${rotate.x * 1.8}px, 55px)`,
          }}
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-400 flex items-center justify-center text-black font-black">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-medium">تحليل نمو المبيعات</div>
            <div className="text-xs font-black text-emerald-400 font-mono tracking-tight">
              +114% عائد موثق ︽
            </div>
          </div>
        </div>

        {/* Top-Left Micro Badge: Targeting Precision */}
        <div 
          className="hidden sm:flex badge-float absolute top-1/2 -left-6 px-3 py-1.5 rounded-xl bg-[#060a08]/90 border border-emerald-500/30 backdrop-blur-md items-center gap-2 [animation-delay:2.5s]"
          style={{
            transform: `translate3d(${rotate.y * 1.2}px, ${-rotate.x * 1.2}px, 35px)`,
          }}
        >
          <Target className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[10px] font-bold text-slate-200">
            دقة استهداف <strong className="text-emerald-300">99.4%</strong>
          </span>
        </div>

      </div>
    </div>
  );
}

