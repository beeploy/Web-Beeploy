import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://beeploy.netlify.app',
      lastModified: new Date(),
      priority: 1.0,
    },
  ];
}
