import { ShareProduct } from "@/components/product-cards/share-product";
import { ProductView } from "@/components/product-view";
import { Container } from "@/components/wrappers/container";
import { getData } from "@/utils/api-calls";
import { getSession } from "@/utils/auth";
import { Suspense } from "react";

async function Products() {
  const [session, res] = await Promise.all([getSession(), getData(`products`)]);

  return (
    <>
      {res.response.payload?.map((product, index) => (
        <ShareProduct
          key={index}
          product={product}
          referrer={session.payload.generatedCode}
        />
      ))}
    </>
  );
}

export default function Page() {
  return (
    <div>
      <Container>
        <ProductView className="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Suspense>
            <Products />
          </Suspense>
        </ProductView>
      </Container>
    </div>
  );
}
