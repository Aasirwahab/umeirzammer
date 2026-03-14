import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { AnimatedButton } from './AnimatedButton';
import { navigationConfig } from '@/config';

export function Navigation() {
  if (!navigationConfig.logo && navigationConfig.links.length === 0) return null;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isHomePage ? 1800 : 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // On inner pages, navbar should always have the scrolled (white) style
  const showWhiteNav = isScrolled || !isHomePage;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-circ',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
          showWhiteNav ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="w-full px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {navigationConfig.logo && (
              <Link to="/" className="flex items-center">
                <span className={cn(
                  "text-2xl font-semibold tracking-tight transition-colors duration-500",
                  showWhiteNav ? "text-exvia-black" : "text-white"
                )}>
                  {navigationConfig.logo}
                </span>
              </Link>
            )}

            {/* Desktop Navigation */}
            {navigationConfig.links.length > 0 && (
              <div className="hidden lg:flex items-center gap-10">
                {navigationConfig.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={cn(
                      "text-base transition-colors duration-500 relative group",
                      showWhiteNav ? "text-exvia-black/80 hover:text-exvia-black" : "text-white/90 hover:text-white",
                      location.pathname === link.href && (showWhiteNav ? "text-exvia-black font-medium" : "text-white font-medium")
                    )}
                  >
                    {link.label}
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-px transition-all duration-300",
                      showWhiteNav ? "bg-exvia-black" : "bg-white",
                      location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                ))}
              </div>
            )}

            {/* Contact Button */}
            {navigationConfig.contactLabel && (
              <div className="hidden lg:block">
                <Link to={navigationConfig.contactHref || "/contact"}>
                  <AnimatedButton
                    variant={showWhiteNav ? "primary" : "outline-white"}
                    size="md"
                  >
                    {navigationConfig.contactLabel}
                  </AnimatedButton>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            {navigationConfig.links.length > 0 && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-8 h-6 flex flex-col justify-between"
                aria-label="Toggle menu"
              >
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-500 ease-out-quad origin-center',
                    showWhiteNav ? 'bg-exvia-black' : 'bg-white',
                    isMenuOpen && 'translate-y-[10px] rotate-[-45deg]'
                  )}
                />
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-300 ease-out-quad',
                    showWhiteNav ? 'bg-exvia-black' : 'bg-white',
                    isMenuOpen && 'scale-0 opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-500 ease-out-quad origin-center',
                    showWhiteNav ? 'bg-exvia-black' : 'bg-white',
                    isMenuOpen && '-translate-y-[10px] rotate-[45deg]'
                  )}
                />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {navigationConfig.links.length > 0 && (
        <div
          className={cn(
            'fixed inset-0 z-40 bg-white transition-all duration-500 ease-out-cubic lg:hidden',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navigationConfig.links.map((link, index) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  'text-3xl font-semibold text-exvia-black transition-all duration-500 ease-out-quart',
                  isMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8',
                  location.pathname === link.href && 'text-exvia-black/60'
                )}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}
            {navigationConfig.contactLabel && (
              <Link
                to={navigationConfig.contactHref || "/contact"}
                className={cn(
                  'mt-4 transition-all duration-500 ease-out-quart',
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
              >
                <AnimatedButton variant="primary" size="lg">
                  {navigationConfig.contactLabel}
                </AnimatedButton>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
