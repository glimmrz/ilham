"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { MenuItem } from "./menu-sidebar/menu-item";
import { Sidebar } from "./sidebar";
import { useAccountSidebar } from "@/hooks/controllers";
import { logout } from "@/utils/auth";

const loggedInUser = [
  {
    label: "my profile",
    icon: "user",
    slug: "/user/profile",
  },
  {
    label: "my orders",
    icon: "box",
    slug: "/user/orders",
  },
  {
    label: "my addresses",
    icon: "map-pin-house",
    slug: "/user/address",
  },
];

const loggedOutUser = [
  {
    label: "login",
    icon: "log-in",
    slug: "/login",
  },
  {
    label: "create an account",
    icon: "user-plus",
    slug: "/register",
  },
];

export function AccountSidebar({ userData }) {
  const accountSidebar = useAccountSidebar();
  const router = useRouter();

  return (
    <Sidebar
      isOpen={accountSidebar.isOpen}
      onClose={accountSidebar.onClose}
      title="my account"
    >
      <div className="flex flex-col gap-2">
        {!userData.error &&
          loggedInUser?.map((item, index) => (
            <MenuItem
              item={item}
              key={index}
              onClick={accountSidebar.onClose}
            />
          ))}

        {userData.error &&
          loggedOutUser?.map((item, index) => (
            <MenuItem
              item={item}
              key={index}
              onClick={accountSidebar.onClose}
            />
          ))}

        {!userData.payload?.code && (
          <Button
            icon="handshake"
            onClick={() => {
              router.push("/become-a-partner");
              accountSidebar.onClose();
            }}
          >
            become a partner
          </Button>
        )}

        {!userData.error && (
          <Button
            icon="logout"
            onClick={() => {
              logout();
              accountSidebar.onClose();
              router.refresh();
            }}
          >
            logout
          </Button>
        )}
      </div>
    </Sidebar>
  );
}
