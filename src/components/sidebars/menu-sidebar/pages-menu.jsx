import { useMenuSidebar } from "@/hooks/controllers";
import { pagesData } from "@/lib/static";
import { MenuItem } from "./menu-item";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PagesMenu() {
  const menuSidebar = useMenuSidebar();

  return (
    <div className="flex flex-col gap-2">
      {pagesData?.map((item, index) => (
        <MenuItem item={item} key={index} onClick={menuSidebar.onClose} />
      ))}
      <Link href="/become-a-partner" passHref>
        <Button icon="handshake" className="w-full">
          share & earn
        </Button>
      </Link>
    </div>
  );
}
