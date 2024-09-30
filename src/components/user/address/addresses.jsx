import { Suspense } from "react";
import { AddressSkeleton } from "../../skeletons/address-skeleton";
import { AddressCard } from "./address-card";
import { AddressHeader } from "./address-header";
import { getSession } from "@/utils/auth";
import { getData } from "@/utils/api-calls";

async function Addresses() {
  const session = await getSession();
  const res = await getData(`users/${session.payload?._id}`);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(350px,_.5fr))] gap-4">
        {res.response.payload?.addresses?.map((address, index) => (
          <AddressCard key={index} address={address} />
        ))}
      </div>
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
