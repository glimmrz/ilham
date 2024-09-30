import { Profile } from "@/components/user/profile";
import { Suspense } from "react";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ProfileData() {
  await delay(3000);
  return <Profile data={{}} />;
}

export default async function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProfileData />
    </Suspense>
  );
}
