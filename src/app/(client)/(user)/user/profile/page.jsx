import { Profile } from "@/components/user/profile";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
  await delay(3000);

  return <Profile data={{}} />;
}
