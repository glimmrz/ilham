import { ProfileSkeleton } from "@/components/skeletons/profile-skeleton";
import { Profile } from "@/components/user/profile";
import { getData } from "@/utils/api-calls";
import { getSession } from "@/utils/auth";
import { Suspense } from "react";

export async function generateMetadata() {
  const session = await getSession();

  return {
    title: `${session.payload?.name}'s profile`,
  };
}

async function ProfileData() {
  const session = await getSession();
  const res = await getData(`users/${session.payload?._id}`, 0);

  return <Profile data={res.response?.payload} />;
}

export default async function Page() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileData />
    </Suspense>
  );
}
