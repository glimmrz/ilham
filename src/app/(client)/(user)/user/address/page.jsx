import { Empty } from "@/components/empty";
import { Heading } from "@/components/heading";
import { AddressSkeleton } from "@/components/skeletons/address-skeleton";
import { Button } from "@/components/ui/button";
import { AddressCard } from "@/components/address-card";
import { getData } from "@/utils/api-calls";
import { getSession } from "@/utils/auth";
import { Suspense } from "react";
import { AddAddress } from "@/components/modals/add-address";

export async function generateMetadata() {
  const session = await getSession();

  return {
    title: `${session.payload?.name}'s saved addresses`,
  };
}

async function Addresses() {
  const session = await getSession();
  const res = await getData(`users/${session.payload?._id}`, 0);

  return (
    <>
      {res.response.payload?.addresses?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(350px,_.5fr))] gap-4">
          {res.response.payload?.addresses?.map((address, index) => (
            <AddressCard key={index} address={address} />
          ))}
        </div>
      )}

      {res.response.payload?.addresses?.length === 0 && (
        <Empty message="You haven't saved any addresses yet. Add an address to continue." />
      )}
    </>
  );
}

export default async function Page() {
  return (
    <>
      <header className="flex items-center justify-between my-4">
        <Heading>address book</Heading>
        <AddAddress />
      </header>
      <Suspense fallback={<AddressSkeleton />}>
        <Addresses />
      </Suspense>
    </>
  );
}
