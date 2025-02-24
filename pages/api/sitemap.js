export default async function handler(req, res) {
  const staticRoutes = [
    {
      loc: "https://derma-prod.vercel.app/",
      lastmod: new Date().toISOString(),
    },
    {
      loc: "https://derma-prod.vercel.app/about",
      lastmod: new Date().toISOString(),
    },
    {
      loc: "https://derma-prod.vercel.app/contact",
      lastmod: new Date().toISOString(),
    },
    {
      loc: "https://derma-prod.vercel.app/blog",
      lastmod: new Date().toISOString(),
    },
  ];

  // Fetch dynamic routes from an API or database
  const fetchDynamicRoutes = async () => {
    const response = await fetch(
      "https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/blogs?populate=*"
    );
    const data = await response.json();
    return data.map((page) => ({
      loc: `https://derma-prod.vercel.app/blog/${page?.documentId}`,
      lastmod: new Date().toISOString(),
    }));
  };

  const dynamicRoutes = await fetchDynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  allRoutes.forEach(({ loc, lastmod }) => {
    sitemap += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>\n`;
  });

  sitemap += `</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
