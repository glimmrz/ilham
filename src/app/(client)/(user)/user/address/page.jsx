import { Address } from "@/components/user/address/addresses";
import { getSession } from "@/utils/auth";

export async function generateMetadata() {
  const session = await getSession();

  return {
    title: `${session.payload?.name}'s saved addresses`,
  };
}

export default async function Page() {
  return <Address />;
}
