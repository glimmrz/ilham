import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
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
    <>
      <div className="flex items-center justify-between my-4">
        <Heading>address book</Heading>
        <Button icon="plus">add new address</Button>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <AddressData />;
      </Suspense>
    </>
  );
}
