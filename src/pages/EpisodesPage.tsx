import { type ElementType } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useServiceParallax } from '@/hooks/useMouseParallax';
import { servicesConfig } from '@/config';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/sections/CTA';
import * as LucideIcons from 'lucide-react';

function getIcon(iconName: string): ElementType {
  const icons = LucideIcons as unknown as Record<string, ElementType>;
  return icons[iconName] || LucideIcons.Circle;
}

function EpisodeCard({ service, index }: { service: { iconName: string; title: string; description: string; image: string }; index: number }) {

  const { containerRef } = useServiceParallax();
  const Icon = getIcon(service.iconName);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={(el) => {
        containerRef.current = el;
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className={cn(
        'group relative overflow-hidden bg-white border border-exvia-border transition-all duration-700 ease-out-quart cursor-pointer hover:shadow-lg',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        index > 0 && `delay-[${index * 100}ms]`
      )}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out-cubic group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center border border-exvia-border rounded-lg bg-exvia-subtle/30">
            <Icon className="w-4 h-4 text-exvia-black" />
          </div>
          <span className="text-xs font-geist-mono text-exvia-black/40 uppercase tracking-widest">0{index + 1}</span>
        </div>
        <h3 className="text-h5 font-semibold text-exvia-black">{service.title}</h3>
        <p className="text-sm text-exvia-black/60 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}

export function EpisodesPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <>
      <PageHero
        label="Episodes"
        heading="Content That Inspires & Entertains"
        description="Explore the different types of content I create — from deep-dive podcast episodes to short-form motivation."
        backgroundImage={servicesConfig.services[0]?.image}
      />

      {/* Content Types Grid */}
      <section className="w-full py-24 lg:py-32 bg-exvia-subtle/30">
        <div className="container-large px-6 lg:px-12">
          <div ref={headerRef} className="max-w-2xl mb-16">
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                {servicesConfig.label}
              </span>
            </div>
            <h2
              className={cn(
                'text-h2 font-semibold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                'delay-100'
              )}
            >
              What I Create
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {servicesConfig.services.map((service, index) => (
              <EpisodeCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* List Format - Same as original Services */}
      <section className="w-full py-24 lg:py-32 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
              Browse
            </span>
            <h2 className="text-h3 font-semibold text-exvia-black mt-4">All Content Types</h2>
          </div>

          <div className="border-b border-exvia-border">
            {servicesConfig.services.map((service, index) => {
              const Icon = getIcon(service.iconName);
              return (
                <div
                  key={service.title}
                  className="relative p-8 lg:p-10 border-t border-exvia-border transition-colors duration-300 cursor-pointer hover:bg-exvia-subtle/30"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 flex items-center justify-center border border-exvia-border rounded-lg bg-white">
                        <Icon className="w-5 h-5 text-exvia-black" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-h5 font-semibold text-exvia-black">{service.title}</h3>
                      <p className="text-sm text-exvia-black/60 leading-relaxed max-w-md">{service.description}</p>
                    </div>
                    <div className="hidden lg:block text-xs font-geist-mono text-exvia-black/30">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
