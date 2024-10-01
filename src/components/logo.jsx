import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="h-12 w-36 flex items-center justify-center">
        <h1 className="text-2xl text-center font-extrabold">iLHAM</h1>
      </div>
    </Link>
  );
};
