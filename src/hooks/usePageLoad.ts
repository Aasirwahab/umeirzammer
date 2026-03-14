import { useEffect, useState } from 'react';

export function usePageLoad() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // We let the Preloader component handle the overlay closing
      // after its animation is complete.
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return { showOverlay, setShowOverlay };
}
