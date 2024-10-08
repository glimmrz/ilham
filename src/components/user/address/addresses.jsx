import { Suspense } from "react";
import { AddressSkeleton } from "../../skeletons/address-skeleton";
import { AddressCard } from "./address-card";
import { AddressHeader } from "./address-header";
import { getSession } from "@/utils/auth";
import { getData } from "@/utils/api-calls";
import { Empty } from "@/components/empty";

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

export function Address() {
  return (
    <>
      <AddressHeader />
      <Suspense fallback={<AddressSkeleton />}>
        <Addresses />
      </Suspense>
    </>
  );
}
