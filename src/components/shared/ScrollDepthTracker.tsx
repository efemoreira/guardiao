'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

const THRESHOLDS = [25, 50, 75, 90, 100];

// Dispara eventos de profundidade de scroll no GA4, uma vez por marco por sessão de página.
// Complementa o "scroll" automático do Enhanced Measurement (que só reporta 90%).
const ScrollDepthTracker: React.FC = () => {
  useEffect(() => {
    const fired = new Set<number>();

    const checkScrollDepth = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((window.scrollY / docHeight) * 100);
      THRESHOLDS.forEach((threshold) => {
        if (percent >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          trackEvent('scroll_depth', {
            event_category: 'engagement',
            percent_scrolled: threshold,
          });
        }
      });
    };

    window.addEventListener('scroll', checkScrollDepth, { passive: true });
    checkScrollDepth();

    return () => window.removeEventListener('scroll', checkScrollDepth);
  }, []);

  return null;
};

export default ScrollDepthTracker;
