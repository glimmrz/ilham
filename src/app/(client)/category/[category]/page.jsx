import { CategoryView } from "@/components/category-view";
import { Container } from "@/components/wrappers/container";
import { Product } from "@/components/product-cards/product";
import { ProductView } from "@/components/product-view";
import { PromoSlider } from "@/components/promo-slider";
import { getData } from "@/utils/api-calls";
import { Suspense } from "react";
import { ProductviewSkeleton } from "@/components/skeletons/productview-skeleton";
import { CategoryviewSkeleton } from "@/components/skeletons/categoryview-skeleton";
import { formatParams } from "@/utils/helpers";

// generate metadata
export async function generateMetadata({ params }) {
  const res = await getData(`categories/${formatParams(params.category)}`);

  return {
    title: formatParams(params.category),
    openGraph: {
      title: `${formatParams(params.category)} | iLHAM`,
    },
    description: res.response.payload?.description,
  };
}

// Get sub categories based on category
async function Categories({ category }) {
  const res = await getData(`categories/${category}`);

  if (!res.response.payload) return null;

  return <CategoryView categories={res.response.payload?.subCategories} />;
}

// get products based on category
async function Products({ category, subCategory }) {
  const res = await getData(
    `products?category=${formatParams(category)}${
      subCategory ? `&sub=${subCategory}` : ""
    }`,
    0
  );

  return (
    <>
      {res.response.payload?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
}

const Page = ({ params, searchParams }) => {
  return (
    <Container>
      {/* <PromoSlider /> */}
      <Suspense fallback={<CategoryviewSkeleton />}>
        <Categories category={params.category} />
      </Suspense>

      <ProductView title={formatParams(params.category)}>
        <Suspense fallback={<ProductviewSkeleton />}>
          <Products category={params.category} subCategory={searchParams.sub} />
        </Suspense>
      </ProductView>
    </Container>
  );
};

export default Page;
