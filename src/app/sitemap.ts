import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.orionsols.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.orionsols.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.orionsols.com/services',
      lastModified: new Date(),
    },
    {
      url: 'https://www.orionsols.com/contact',
      lastModified: new Date(),
    },
    {
        url: 'https://www.orionsols.com/blog',
        lastModified: new Date(),
      },
    
  ]
}
