import { useEffect, useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { heroConfig } from '@/config';

const boxSize = 500;
const halfBox = boxSize / 2;

export function Hero() {
  if (!heroConfig.name && heroConfig.roles.length === 0) return null;

  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Set initial centered position
  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const centerX = rect.width / 2 - halfBox;
      const centerY = rect.height / 2 - halfBox;
      setMousePos({ x: centerX, y: centerY });
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const section = e.currentTarget;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left - halfBox;
    const y = e.clientY - rect.top - halfBox;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-neutral-900 cursor-none"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with Blur - Full coverage */}
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-1000',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <img
          src={heroConfig.backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(20px) brightness(0.6)', objectPosition: 'center 20%' }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Sharp Image Window - Follows Mouse */}
      <div
        className={cn(
          'absolute overflow-hidden pointer-events-none z-20 transition-opacity duration-500',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: boxSize,
          height: boxSize,
          left: mousePos.x,
          top: mousePos.y,
          willChange: 'left, top',
        }}
      >
        {/* Sharp Image - Counter-positioned to align with background */}
        <img
          src={heroConfig.backgroundImage}
          alt="Hero Sharp"
          className="absolute object-cover"
          style={{
            width: '100vw',
            height: '100vh',
            left: -mousePos.x,
            top: -mousePos.y,
            minWidth: '100vw',
            minHeight: '100vh',
            objectPosition: 'center 20%',
          }}
        />
      </div>

      {/* Square Border Frame */}
      <div
        className={cn(
          'absolute pointer-events-none z-30 transition-opacity duration-500',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: boxSize,
          height: boxSize,
          left: mousePos.x,
          top: mousePos.y,
          border: '2px solid rgba(255,255,255,0.5)',
          boxShadow: '0 0 30px rgba(0,0,0,0.3)',
        }}
      >
        {/* Crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-px bg-white/70" />
          <div className="absolute w-px h-6 bg-white/70" />
        </div>
      </div>

      {/* Role labels on sides */}
      {heroConfig.roles[0] && (
        <div
          className={cn(
            'absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-30 transition-all duration-1000',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: '800ms' }}
        >
          <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/80 writing-mode-vertical hidden md:block"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            {heroConfig.roles[0]}
          </span>
          <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/80 md:hidden">
            {heroConfig.roles[0]}
          </span>
        </div>
      )}
      {heroConfig.roles[1] && (
        <div
          className={cn(
            'absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 transition-all duration-1000',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: '900ms' }}
        >
          <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/80 writing-mode-vertical hidden md:block"
            style={{ writingMode: 'vertical-rl' }}>
            {heroConfig.roles[1]}
          </span>
          <span className="text-xs font-geist-mono uppercase tracking-[0.3em] text-white/80 md:hidden">
            {heroConfig.roles[1]}
          </span>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-30 flex flex-col items-center justify-end h-full px-6 lg:px-12 pointer-events-none pb-12 lg:pb-16">
        {/* Main Heading */}
        <div
          className={cn(
            'text-center transition-all duration-1000',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          <h1 className="text-[clamp(2.5rem,10vw,10rem)] font-black text-white tracking-[-0.04em] leading-[0.9] drop-shadow-lg">
            {heroConfig.name}
          </h1>
        </div>
      </div>
    </section>
  );
}
