import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '@/config';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/sections/CTA';

function ProjectCard({ project, index, isVisible }: { project: { title: string; category: string; year: string; image: string; featured?: boolean }; index: number; isVisible: boolean }) {
  return (
    <div
      className={cn(
        'group cursor-pointer transition-all duration-700 ease-out-quart',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden bg-exvia-subtle">
        <div className="aspect-[4/3]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out-cubic group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-exvia-black/0 group-hover:bg-exvia-black/20 transition-colors duration-500" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 text-xs font-geist-mono bg-white/90 backdrop-blur-sm rounded-full text-exvia-black">
            {project.year}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-exvia-black" />
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-semibold text-exvia-black group-hover:text-exvia-black/80 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-exvia-black/50">{project.category}</p>
      </div>
    </div>
  );
}

export function ContentPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: gridRef, visibleItems } = useStaggerAnimation(portfolioConfig.projects.length + 1, 120);

  return (
    <>
      <PageHero
        label="Featured Content"
        heading="Popular Episodes & Moments"
        description={portfolioConfig.description}
        backgroundImage={portfolioConfig.projects[0]?.image}
      />

      {/* All Content Grid */}
      <section className="w-full py-24 lg:py-32 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div ref={headerRef} className="max-w-2xl mb-16">
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                All Content
              </span>
            </div>
            <h2
              className={cn(
                'text-h2 font-semibold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              Explore Everything
            </h2>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioConfig.projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isVisible={visibleItems[index]}
              />
            ))}

            {/* CTA Card */}
            {portfolioConfig.cta.heading && (
              <div
                className={cn(
                  'relative overflow-hidden bg-exvia-black rounded-lg p-8 flex flex-col justify-between transition-all duration-700 ease-out-quart aspect-[4/3]',
                  visibleItems[portfolioConfig.projects.length] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
              >
                <div>
                  <span className="text-xs font-geist-mono uppercase tracking-widest text-white/50">
                    {portfolioConfig.cta.label}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mt-3 leading-tight">
                    {portfolioConfig.cta.heading}
                  </h3>
                </div>
                {portfolioConfig.cta.linkText && (
                  <a href={portfolioConfig.cta.linkHref || '/contact'} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer group">
                    <span className="text-sm font-medium">{portfolioConfig.cta.linkText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/5" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
              </div>
            )}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
