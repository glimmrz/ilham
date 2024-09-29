import { Address } from "@/components/user/addresses";
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
  await delay(3000);
  return <Address />;
}
