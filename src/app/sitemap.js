import { getData } from "@/utils/api-calls";

export default async function sitemap() {
  const [products, categories] = await Promise.all([
    getData("products"),
    getData("categories"),
  ]);

  const product = products.response.payload?.map((item) => ({
    url: `${process.env.SITE_URL}/product/${item.slug}`,
    lastModified: item.updatedAt,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const category = categories.response.payload?.map((item) => ({
    url: `${process.env.SITE_URL}${item.slug}`,
    lastModified: item.updatedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: process.env.SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.SITE_URL}/shop`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...product,
    ...category,
    {
      url: `${process.env.SITE_URL}/login`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${process.env.SITE_URL}/register`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
