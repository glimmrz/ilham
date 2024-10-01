import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="h-12 w-36 flex items-center">
        <h1 className="text-2xl font-extrabold">iLHAM</h1>
      </div>
    </Link>
  );
};
