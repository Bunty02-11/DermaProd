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

  const fetchDynamicRoutes = async () => {
    try {
      // API endpoints
      const endpoints = [
        "https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/blogs?populate=*",
        "https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/categories?populate=*",
        "https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/Concerns?populate=*",
        "https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/services?populate=*",
        "https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/promotions?populate=*",
      ];

      // Fetch data from all endpoints in parallel
      const responses = await Promise.all(endpoints.map((url) => fetch(url)));
      const data = await Promise.all(responses.map((res) => res.json()));

      // Extract and format data from each API response
      const blogRoutes =
        data[0]?.data?.map((page) => ({
          loc: `https://derma-prod.vercel.app/blog/${page?.documentId}`,
          lastmod: new Date().toISOString(),
        })) || [];

      const concernsRoutes =
        data[1]?.data?.map((product) => ({
          loc: `https://derma-prod.vercel.app/concerns/${product?.id}`,
          lastmod: new Date().toISOString(),
        })) || [];

      const concernsInnerRoutes =
        data[2]?.data?.map((product) => ({
          loc: `https://derma-prod.vercel.app/concern-details/${product?.slug}`,
          lastmod: new Date().toISOString(),
        })) || [];

      const servicesRoutes =
        data[3]?.data?.map((product) => ({
          loc: `https://derma-prod.vercel.app/services/${product?.slug}`,
          lastmod: new Date().toISOString(),
        })) || [];

      const specialsRoutes =
        data[4]?.data?.map((category) => ({
          loc: `https://derma-prod.vercel.app/specials/${category?.slug}`,
          lastmod: new Date().toISOString(),
        })) || [];

      return [
        ...blogRoutes,
        ...concernsRoutes,
        ...concernsInnerRoutes,
        ...servicesRoutes,
        ...specialsRoutes,
      ];
    } catch (error) {
      console.error("Error fetching dynamic routes:", error);
      return [];
    }
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
