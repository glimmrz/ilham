import { Container } from "@/components/wrappers/container";
import { ProfileSidebar } from "@/components/sidebars/profile-sidebar";

export default function Layout({ children }) {
  return (
    <Container>
      <div className="lg:flex">
        <ProfileSidebar />

        <div className="w-full rounded-md">
          <div className="p-0 md:p-2">{children}</div>
        </div>
      </div>
    </Container>
  );
}
