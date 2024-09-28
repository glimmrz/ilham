import { Container } from "@/components/wrappers/container";
import { ProfileSidebar } from "@/components/sidebars/profile-sidebar";

export default function Layout({ children }) {
  return (
    <Container>
      <div className="lg:flex gap-4">
        <ProfileSidebar />

        <div className="w-full">{children}</div>
      </div>
    </Container>
  );
}
