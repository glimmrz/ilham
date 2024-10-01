import { getData } from "@/utils/api-calls";

export default async function sitemap() {
  const products = await getData("products");
  const categories = await getData("categories");

  const product = products.response.payload?.map((item) => ({
    url: `https://ilham.com.bd/product/${item._id}`,
    lastModified: item.updatedAt,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const category = categories.response.payload?.map((item) => ({
    url: `https://ilham.com.bd${item.slug}`,
    lastModified: item.updatedAt,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [
    {
      url: "https://ilham.com.bd",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...product,
    ...category,
  ];
}
