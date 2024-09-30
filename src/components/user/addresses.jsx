"use client";
import { AddressCard } from "@/components/address/address-card";

export function Address({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(350px,_.5fr))] gap-4">
      <AddressCard />
      <AddressCard />
      <AddressCard />
      <AddressCard />
    </div>
  );
}
