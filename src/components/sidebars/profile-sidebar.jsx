"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Container } from "../wrappers/container";
import { Icon } from "../icon";

const sidebarItems = [
  {
    label: "profile",
    link: "profile",
    icon: "user",
  },
  {
    label: "orders",
    link: "orders",
    icon: "box",
  },
  {
    label: "address",
    link: "address",
    icon: "location",
  },
];

export function ProfileSidebar({ data }) {
  const pathname = usePathname();

  return (
    <aside
      className={`w-[300px] h-fit bg-accent rounded-md shadow-regular overflow-hidden transition-all duration-300 md:min-w-[300px] lg:sticky lg:top-0`}
    >
      <header className="relative">
        <figure className="relative h-[100px]">
          <Image
            src="https://zeris.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcover.7c22d4c7.png&w=640&q=75"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 350px"
          />

          <div className="absolute w-fit bottom-[-45px] left-0 right-0 m-auto">
            <figure className="relative h-[90px] w-[90px] rounded-full overflow-hidden border-[5px] border-background">
              <Image
                src="https://zeris.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.53c51237.jpg&w=96&q=75"
                alt=""
                fill
                className="object-contain"
                sizes="80px"
              />
            </figure>
          </div>
        </figure>

        <div className="mt-10 text-center border-b-[1px] border-muted-foreground pt-2 pb-2">
          <CardTitle>John Doe</CardTitle>
          <p className="text-base opacity-70">admin@email.com</p>
        </div>

        <Button
          icon="close"
          variant="close"
          className="p-3 rounded-full absolute top-2 right-2 lg:hidden"
        >
          close
        </Button>
      </header>

      <div className="flex flex-col gap-2 p-2">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            pathname={pathname?.split("/")[2] ? pathname?.split("/")[2] : ""}
          />
        ))}
      </div>
    </aside>
  );
}

function SidebarItem({ item, pathname }) {
  return (
    <Link href={item?.link ? item?.link : "#"} passHref>
      <Button
        variant="outline"
        iconSize={22}
        className={`border-0 shadow-regular w-full justify-start text-inherit hover:bg-accent transition-all duration-300 ${
          pathname === item?.link &&
          "bg-accent shadow-active border-l-[5px] border-primary text-primary"
        }`}
      >
        <Icon icon={item.icon} />
        <span>{item.label}</span>
      </Button>
    </Link>
  );
}
