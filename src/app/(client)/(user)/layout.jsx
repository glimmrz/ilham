import { Container } from "@/components/container";
import { Sidebar } from "@/components/sidebars/sidebar";

export default function Layout({ children }) {
  return (
    <Container>
      <div className="lg:flex">
        {/* <ProfileSidebar data={userData} /> */}
        <Sidebar />

        <div className="w-full rounded-md">
          <div className="p-0 md:p-2">{children}</div>
        </div>
      </div>
    </Container>
  );
}
