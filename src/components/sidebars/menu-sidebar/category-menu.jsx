import { useMenuSidebar } from "@/hooks/controllers";
import { MenuItem } from "./menu-item";

export function CategoryMenu({ categories }) {
  const menuSidebar = useMenuSidebar();

  return (
    <div className="flex flex-col gap-2">
      <MenuItem
        onClick={menuSidebar.onClose}
        item={{ label: "all products", slug: "/shop", icon: "store" }}
      />
      {categories?.map((item, index) => (
        <MenuItem item={item} key={index} onClick={menuSidebar.onClose} />
      ))}
    </div>
  );
}
