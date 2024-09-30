import { ProfileSkeleton } from "@/components/skeletons/profile-skeleton";
import { Profile } from "@/components/user/profile";
import { Suspense } from "react";

async function ProfileData() {
  return <Profile data={{}} />;
}

export default async function Page() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileData />
    </Suspense>
  );
}
