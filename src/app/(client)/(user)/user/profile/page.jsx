import { ProfileSkeleton } from "@/components/skeletons/profile-skeleton";
import { Profile } from "@/components/user/profile";
import { getData } from "@/utils/api-calls";
import { getSession } from "@/utils/auth";
import { Suspense } from "react";

async function ProfileData() {
  const session = await getSession();
  const res = await getData(`users/${session.payload?._id}`);

  return <Profile data={res.response?.payload} />;
}

export default async function Page() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileData />
    </Suspense>
  );
}
