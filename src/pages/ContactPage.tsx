import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, Instagram, Video, ArrowUpRight } from 'lucide-react';
import { ctaConfig, footerConfig } from '@/config';
import { PageHero } from '@/components/PageHero';

export function ContactPage() {
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <PageHero
        label="Get In Touch"
        heading="Let's Create Something Amazing Together"
        description={ctaConfig.description}
        backgroundImage={ctaConfig.backgroundImage}
      />

      <section className="w-full py-24 lg:py-32 bg-white">
        <div className="container-large px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div ref={infoRef} className="space-y-10">
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
              >
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                  Contact
                </span>
                <h2 className="text-h3 font-semibold text-exvia-black mt-3">Let's Connect</h2>
                <p className="text-base text-exvia-black/60 mt-4 leading-relaxed">
                  Whether you're looking for collaboration, sponsorship opportunities, guest appearances,
                  or just want to say hello — I'd love to hear from you!
                </p>
              </div>

              {/* Email */}
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '100ms' }}
              >
                <h3 className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/40 mb-3">Email</h3>
                <a
                  href={`mailto:${ctaConfig.email}`}
                  className="inline-flex items-center gap-3 text-lg text-exvia-black hover:text-exvia-black/70 transition-colors group"
                >
                  <Mail className="w-5 h-5" />
                  <span>{ctaConfig.email}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Phone */}
              {ctaConfig.phone && (
                <div
                  className={cn(
                    'transition-all duration-800 ease-out-quart',
                    infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  )}
                  style={{ transitionDelay: '150ms' }}
                >
                  <h3 className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/40 mb-3">Phone</h3>
                  <a
                    href={`tel:${ctaConfig.phone}`}
                    className="inline-flex items-center gap-3 text-lg text-exvia-black hover:text-exvia-black/70 transition-colors group"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{ctaConfig.phone}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )}

              {/* Socials */}
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '200ms' }}
              >
                <h3 className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/40 mb-4">Follow Me</h3>
                <div className="space-y-3">
                  {footerConfig.socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 text-exvia-black/70 hover:text-exvia-black transition-colors group"
                    >
                      <div className="w-10 h-10 border border-exvia-border rounded-full flex items-center justify-center group-hover:bg-exvia-black group-hover:text-white group-hover:border-exvia-black transition-all duration-300">
                        {social.label === 'Instagram' && <Instagram className="w-4 h-4" />}
                        {social.label === 'TikTok' && <Video className="w-4 h-4" />}
                      </div>
                      <span className="text-sm font-medium">{social.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Collaboration Types */}
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '300ms' }}
              >
                <h3 className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/40 mb-4">Open For</h3>
                <div className="flex flex-wrap gap-2">
                  {['Sponsorships', 'Guest Appearances', 'Brand Partnerships', 'Speaking Engagements'].map((tag) => (
                    <span key={tag} className="px-4 py-2 text-xs font-geist-mono text-exvia-black/70 border border-exvia-border rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              ref={formRef}
              className={cn(
                'transition-all duration-800 ease-out-quart',
                formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              <div className="bg-exvia-subtle/30 border border-exvia-border p-8 lg:p-10">
                <h3 className="text-h5 font-semibold text-exvia-black mb-6">Send a Message</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/40 mb-2 block">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-white border border-exvia-border text-sm text-exvia-black placeholder:text-exvia-black/30 focus:outline-none focus:border-exvia-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/40 mb-2 block">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-white border border-exvia-border text-sm text-exvia-black placeholder:text-exvia-black/30 focus:outline-none focus:border-exvia-black transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/40 mb-2 block">Subject</label>
                    <input
                      type="text"
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 bg-white border border-exvia-border text-sm text-exvia-black placeholder:text-exvia-black/30 focus:outline-none focus:border-exvia-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/40 mb-2 block">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell me more..."
                      className="w-full px-4 py-3 bg-white border border-exvia-border text-sm text-exvia-black placeholder:text-exvia-black/30 focus:outline-none focus:border-exvia-black transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-exvia-black text-white text-sm font-geist-mono hover:bg-exvia-base-black transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
