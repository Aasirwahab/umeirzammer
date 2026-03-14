import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  label: string;
  heading: string;
  description?: string;
  backgroundImage?: string;
}

export function PageHero({ label, heading, description, backgroundImage }: PageHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-exvia-black">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
            style={{ filter: 'blur(4px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-exvia-black/40 to-exvia-black" />
        </div>
      )}

      <div className="relative z-10 container-large px-6 lg:px-12">
        <div
          className={cn(
            'transition-all duration-800 ease-out-quart',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <span className="text-xs font-geist-mono uppercase tracking-widest text-white/50">
            {label}
          </span>
        </div>

        <h1
          className={cn(
            'text-h1 font-semibold text-white mt-4 max-w-4xl transition-all duration-800 ease-out-quart',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
          style={{ transitionDelay: '100ms' }}
        >
          {heading}
        </h1>

        {description && (
          <p
            className={cn(
              'mt-6 text-lg text-white/60 max-w-2xl leading-relaxed transition-all duration-800 ease-out-quart',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
