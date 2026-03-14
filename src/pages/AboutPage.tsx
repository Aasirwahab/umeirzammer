import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { aboutConfig, heroConfig } from '@/config';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/sections/CTA';

export function AboutPage() {
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: galleryRef, visibleItems } = useStaggerAnimation(aboutConfig.images.length || 4, 150);

  return (
    <>
      <PageHero
        label="About Me"
        heading="The Story Behind the Mic"
        description="Podcast host, content creator, and motivational speaker blending self-improvement with comedy."
        backgroundImage={aboutConfig.images[0]?.src}
      />

      {/* Full Bio Section */}
      <section className="w-full py-24 lg:py-32 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div ref={storyRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left - Text */}
            <div className="space-y-8">
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
              >
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                  My Journey
                </span>
              </div>

              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '100ms' }}
              >
                <p className="text-xl lg:text-2xl text-exvia-black leading-relaxed">
                  {aboutConfig.description}
                </p>
              </div>

              <div
                className={cn(
                  'space-y-4 pt-4 transition-all duration-800 ease-out-quart',
                  storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '200ms' }}
              >
                <p className="text-base text-exvia-black/70 leading-relaxed">
                  It all started with a simple idea: what if personal growth didn't have to be boring?
                  Combining my love for comedy with genuine self-improvement advice, I created a space where
                  people can laugh, learn, and grow — all at the same time.
                </p>
                <p className="text-base text-exvia-black/70 leading-relaxed">
                  From interviewing entrepreneurs and thought leaders to sharing my own vulnerable moments,
                  every piece of content I create is designed to make you feel seen, inspired, and ready to
                  take on the world. Because growth should be enjoyable.
                </p>
              </div>

              {/* Experience Badge */}
              {aboutConfig.experienceValue && (
                <div
                  className={cn(
                    'flex items-end gap-3 pt-4 transition-all duration-800 ease-out-quart',
                    storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  )}
                  style={{ transitionDelay: '300ms' }}
                >
                  <span className="text-7xl lg:text-8xl font-black text-exvia-black leading-none">
                    {aboutConfig.experienceValue}
                  </span>
                  {aboutConfig.experienceLabel && (
                    <span className="text-sm text-exvia-black/60 pb-3">
                      {aboutConfig.experienceLabel}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Right - Featured Image */}
            <div
              className={cn(
                'relative overflow-hidden transition-all duration-800 ease-out-quart',
                storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="aspect-[3/4] relative group">
                <img
                  src={heroConfig.backgroundImage}
                  alt="Umair Zameer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 lg:py-24 bg-exvia-subtle/30">
        <div ref={statsRef} className="container-large px-6 lg:px-12">
          <div
            className={cn(
              'grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 transition-all duration-800 ease-out-quart',
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            <div className="text-center">
              <span className="block text-5xl lg:text-6xl font-black text-exvia-black">{aboutConfig.experienceValue}</span>
              <span className="text-sm text-exvia-black/60 mt-2 block">Years Podcasting</span>
            </div>
            {aboutConfig.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <span className="block text-5xl lg:text-6xl font-black text-exvia-black">{stat.value}</span>
                <span className="text-sm text-exvia-black/60 mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="w-full py-24 lg:py-32 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">Gallery</span>
            <h2 className="text-h3 font-semibold text-exvia-black mt-3">Moments & Memories</h2>
          </div>
          <div ref={galleryRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutConfig.images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  'relative overflow-hidden transition-all duration-700 ease-out-quart',
                  index % 2 === 1 ? 'lg:mt-8' : '',
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
              >
                <div className="aspect-[4/5] relative group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out-quad group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-exvia-black/0 group-hover:bg-exvia-black/10 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
