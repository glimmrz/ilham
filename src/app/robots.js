export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/dashboard/*"],
    },
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  };
}
