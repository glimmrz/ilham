"use client";
import { AddressCard } from "@/components/address/address-card";
import { Button } from "@/components/ui/button";

export default function Address({ data }) {
  return (
    <>
      <Button>add new address</Button>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(350px,_.5fr))] gap-4">
        <AddressCard />
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </div>
    </>
  );
}
