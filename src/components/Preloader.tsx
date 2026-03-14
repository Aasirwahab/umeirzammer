import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [counter, setCounter] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      const countObj = { value: 0 };

      // 1. Counter animation (0-100)
      tl.to(countObj, {
        value: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: () => {
          const val = Math.floor(countObj.value);
          setCounter(val);
          if (progressRef.current) {
            gsap.set(progressRef.current, { width: `${val}%` });
          }
        }
      })
      // 2. Reveal animation
      .to(counterRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.in",
      })
      .to(topPanelRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "expo.inOut",
      }, "+=0.1")
      .to(bottomPanelRef.current, {
        yPercent: 100,
        duration: 1,
        ease: "expo.inOut",
      }, "<")
      .set(preloaderRef.current, {
        display: "none"
      });
    }, preloaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] overflow-hidden flex flex-col pointer-events-auto"
    >
      {/* Top Panel */}
      <div 
        ref={topPanelRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#131313] border-b border-white/5"
      />
      
      {/* Bottom Panel */}
      <div 
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#131313] border-t border-white/5"
      />

      {/* Counter Content */}
      <div 
        ref={counterRef}
        className="relative z-10 flex flex-col items-center justify-center h-full"
      >
        <div className="flex flex-col items-center">
          <div className="overflow-hidden mb-4">
            <span className="block text-xs font-geist-mono uppercase tracking-[0.5em] text-white/40 animate-pulse">
              System Loading
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-8xl md:text-[12rem] font-bold text-white tracking-tighter leading-none">
              {counter}
            </span>
            <span className="text-2xl md:text-4xl font-light text-white/30 font-geist-mono mb-4">
              %
            </span>
          </div>
          <div className="w-[200px] h-[1px] bg-white/10 relative overflow-hidden mt-8">
            <div 
              ref={progressRef}
              className="absolute left-0 top-0 h-full bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
