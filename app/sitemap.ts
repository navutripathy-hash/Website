import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['','/events/ai-hack-summit','/legal/privacy','/legal/terms'].map((path) => ({
    url: `https://eventstack.example.com${path}`,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7
  }));
}
