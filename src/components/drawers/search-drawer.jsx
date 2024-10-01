"use client";

import { useSearchDrawer } from "@/hooks/controllers";
import { DrawerModal } from "./drawer";
import { InputGroup } from "../input-group";
import { useState } from "react";
import { SearchResults } from "./search-results";

export const SearchDrawer = () => {
  const { isOpen, onClose } = useSearchDrawer();
  const [searchKey, setSearchKey] = useState("");

  return (
    <DrawerModal
      isOpen={isOpen}
      onClose={onClose}
      title="search for products"
      subtitle="find the item of your need."
    >
      <div className="flex-col items-center justify-center">
        <InputGroup
          className="w-full md:w-96"
          placeholder="organic juice"
          name="search"
          label="search product"
          onChange={(e) => setSearchKey(e.target.value)}
        />

        {/* Search results: Loading skeleton must be added. */}
        <SearchResults searchKey={searchKey} />
      </div>
    </DrawerModal>
  );
};
