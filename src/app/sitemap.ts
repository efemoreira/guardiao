import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const baseUrl = 'https://guardiao.felipesmoreira.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/anuncio', priority: 0.9 },
    { path: '/privacidade', priority: 0.3 },
    { path: '/termos', priority: 0.3 },
    { path: '/cookies', priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
