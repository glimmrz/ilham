import { CategoryView } from "@/components/category-view";
import { Container } from "@/components/wrappers/container";
import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";
import { PromoSlider } from "@/components/promo-slider";
import { getData } from "@/utils/api-calls";
import { Suspense } from "react";
import { ProductviewSkeleton } from "@/components/skeletons/productview-skeleton";
import { CategoryviewSkeleton } from "@/components/skeletons/categoryview-skeleton";

// Get sub categories based on category
async function Categories({ category }) {
  const res = await getData(`categories/${category}`);

  return <CategoryView categories={res.response.payload?.subCategories} />;
}

// get products based on category
async function Products({ category }) {
  const res = await getData(`products`);

  return (
    <>
      {res.response.payload?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
}

const Page = ({ params }) => {
  return (
    <Container>
      <PromoSlider />
      <Suspense fallback={<CategoryviewSkeleton />}>
        <Categories category={params.category} />
      </Suspense>

      <ProductView title={params.category}>
        <Suspense fallback={<ProductviewSkeleton />}>
          <Products category={params.category} />
        </Suspense>
      </ProductView>
    </Container>
  );
};

export default Page;
