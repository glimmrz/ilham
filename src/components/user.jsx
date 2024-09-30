import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { logout } from "@/utils/auth";
import { Icon } from "./icon";

export function User({ userData }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="user" />
          <AvatarFallback>IL</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="capitalize">
          {userData.payload?.name ? userData.payload?.name : "My account"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {userData.error && (
          <>
            <Link passHref href="/login" className="w-full">
              <DropdownMenuItem>login</DropdownMenuItem>
            </Link>
            <Link passHref href="/register" className="w-full">
              <DropdownMenuItem>sign up</DropdownMenuItem>
            </Link>
          </>
        )}
        {!userData.error && (
          <>
            <Link passHref href="/user/profile" className="w-full">
              <DropdownMenuItem>
                <span>profile</span>
                <Icon icon="user" />
              </DropdownMenuItem>
            </Link>
            <Link passHref href="/user/orders" className="w-full">
              <DropdownMenuItem>
                <span>orders</span>
                <Icon icon="order" />
              </DropdownMenuItem>
            </Link>
            <Link passHref href="/user/address" className="w-full">
              <DropdownMenuItem>
                <span>addresses</span>
                <Icon icon="location" />
              </DropdownMenuItem>
            </Link>
          </>
        )}
        {!userData.error && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout()}>logout</DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
