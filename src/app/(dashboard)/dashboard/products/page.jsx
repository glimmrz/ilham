import { getData } from "@/utils/api-calls";

export default async function Page() {
  const res = await getData("products", 0);

  return <div>View Products!</div>;
}
