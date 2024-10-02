import { ProductPage } from "@/components/product-page";
import { Container } from "@/components/wrappers/container";
import { getData } from "@/utils/api-calls";

export async function generateMetadata({ params }) {
  const res = await getData(`products/${params.slug}`);

  return {
    title: res.response.payload?.title,
    description: res.response.payload?.seoDescription,
  };
}

export default async function Page({ params }) {
  const res = await getData(`products/${params.slug}`);

  return (
    <Container>
      <ProductPage currentProduct={res.response.payload} />
    </Container>
  );
}
