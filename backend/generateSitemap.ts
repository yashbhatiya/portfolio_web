// scripts/generateSitemap.ts

import fs from 'fs';
import path from 'path';

const domain = 'https://www.yashbhatiya.tech';
const pages = [
    '',              // Homepage
    'projects',
    'contact',
    // Add more paths here as you add pages
];

const getLastMod = () => new Date().toISOString();

const generateSitemap = () => {
    const sitemapEntries = pages.map((page) => {
        const url = `${domain}/${page}`.replace(/\/+$/, ''); // remove trailing slash
        const lastmod = getLastMod();

        let priority = '0.5';
        let changefreq = 'monthly';

        if (page === '') {
            priority = '1.0';
            changefreq = 'weekly';
        } else if (page === 'projects') {
            priority = '0.8';
        } else if (page === 'contact') {
            priority = '0.6';
            changefreq = 'yearly';
        }

        return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
  </url>`;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sitemapEntries.join('\n')}
</urlset>`;

    // Save to public/sitemap.xml
    const filePath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(filePath, sitemap.trim());

    console.log('✅ Sitemap generated successfully!');
};

generateSitemap();
