import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsConfig } from '@/config';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/sections/CTA';

export function CommunityPage() {
  const testimonials = testimonialsConfig.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || testimonials.length === 0) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating, testimonials.length]);

  const nextSlide = useCallback(() => {
    if (testimonials.length === 0) return;
    goToSlide((activeIndex + 1) % testimonials.length);
  }, [activeIndex, goToSlide, testimonials.length]);

  const prevSlide = useCallback(() => {
    if (testimonials.length === 0) return;
    goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length);
  }, [activeIndex, goToSlide, testimonials.length]);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, testimonials.length]);

  return (
    <>
      <PageHero
        label="Community"
        heading="What Listeners Say"
        description="Join a community of 15K+ followers who tune in for authentic conversations, life lessons, and a good dose of humor."
        backgroundImage={testimonials[0]?.image}
      />

      {/* Testimonials Section */}
      <section className="w-full py-24 lg:py-32 bg-white">
        <div ref={sectionRef} className="container-large px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                {testimonialsConfig.label}
              </span>
            </div>
            <h2
              className={cn(
                'text-h2 font-semibold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              Real Reviews, Real People
            </h2>
          </div>

          {/* Testimonials Slider */}
          <div
            className={cn(
              'relative transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Side */}
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-exvia-subtle rounded-lg">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={cn(
                      'absolute inset-0 transition-all duration-1000 ease-out-cubic',
                      index === activeIndex
                        ? 'opacity-100 translate-y-0'
                        : index < activeIndex
                        ? 'opacity-0 -translate-y-full'
                        : 'opacity-0 translate-y-full'
                    )}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-exvia-black" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-5 h-5 transition-all duration-300',
                        i < testimonials[activeIndex].rating
                          ? 'fill-exvia-black text-exvia-black'
                          : 'text-exvia-border'
                      )}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                <div className="relative min-h-[180px]">
                  {testimonials.map((testimonial, index) => (
                    <p
                      key={index}
                      className={cn(
                        'text-xl lg:text-2xl text-exvia-black leading-relaxed absolute inset-0 transition-all duration-700 ease-out-quart',
                        index === activeIndex
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4 pointer-events-none'
                      )}
                    >
                      "{testimonial.quote}"
                    </p>
                  ))}
                </div>

                <div className="pt-6 border-t border-exvia-border">
                  <div className="relative min-h-[60px]">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className={cn(
                          'absolute inset-0 transition-all duration-500 ease-out-quart',
                          index === activeIndex
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4 pointer-events-none'
                        )}
                      >
                        <p className="text-lg font-semibold text-exvia-black">{testimonial.author}</p>
                        <p className="text-sm text-exvia-black/50 mt-1">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                          'w-2 h-2 rounded-full transition-all duration-300',
                          index === activeIndex ? 'bg-exvia-black w-6' : 'bg-exvia-border hover:bg-exvia-black/30'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 border border-exvia-border rounded-full flex items-center justify-center hover:border-exvia-black hover:bg-exvia-black hover:text-white transition-all duration-300"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 border border-exvia-border rounded-full flex items-center justify-center hover:border-exvia-black hover:bg-exvia-black hover:text-white transition-all duration-300"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="w-full py-20 lg:py-24 bg-exvia-black text-white">
        <div className="container-large px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-geist-mono uppercase tracking-widest text-white/50">The Numbers</span>
            <h2 className="text-h3 font-semibold text-white mt-3">Growing Every Day</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-4xl lg:text-5xl font-black text-white">15K+</span>
              <span className="text-sm text-white/60 mt-2 block">Followers</span>
            </div>
            <div>
              <span className="block text-4xl lg:text-5xl font-black text-white">100+</span>
              <span className="text-sm text-white/60 mt-2 block">Episodes</span>
            </div>
            <div>
              <span className="block text-4xl lg:text-5xl font-black text-white">50+</span>
              <span className="text-sm text-white/60 mt-2 block">Guest Interviews</span>
            </div>
            <div>
              <span className="block text-4xl lg:text-5xl font-black text-white">5</span>
              <span className="text-sm text-white/60 mt-2 block">Star Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
