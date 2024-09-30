import { Address } from "@/components/user/addresses";
import { Suspense } from "react";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function AddressData() {
  await delay(3000);

  return <Address />;
}

export default async function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AddressData />;
    </Suspense>
  );
}
