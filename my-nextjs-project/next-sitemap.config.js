/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://portfolio-website-personal-abdul-wahid-chohan.vercel.app",
  generateRobotsText: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/admin/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    additionalSitemaps: ["https://portfolio-website-personal-abdul-wahid-chohan.vercel.app/sitemap.xml"],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      "/": { priority: 1.0, changefreq: "weekly" },
      "/projects": { priority: 0.9, changefreq: "weekly" },
      "/about": { priority: 0.8, changefreq: "monthly" },
      "/contact": { priority: 0.7, changefreq: "monthly" },
    }

    return {
      loc: path,
      changefreq: customConfig[path]?.changefreq || "monthly",
      priority: customConfig[path]?.priority || 0.6,
      lastmod: new Date().toISOString(),
    }
  },
}
