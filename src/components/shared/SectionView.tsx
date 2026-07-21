'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

interface SectionViewProps {
  name: string;
  children: React.ReactNode;
}

// Dispara um evento GA4 "section_view" na primeira vez que a seção entra na
// viewport. Mostra até onde da página os visitantes realmente chegam,
// diferente do scroll_depth (que mede só a posição, não o conteúdo visto).
const SectionView: React.FC<SectionViewProps> = ({ name, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const alreadySeen = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !alreadySeen.current) {
          alreadySeen.current = true;
          trackEvent('section_view', {
            event_category: 'engagement',
            section_name: name,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [name]);

  return <div ref={ref}>{children}</div>;
};

export default SectionView;
