import { Container } from "@/components/wrappers/container";
import { ProfileSidebar } from "@/components/sidebars/profile-sidebar";
import { Suspense } from "react";

export default async function Layout({ children }) {
  return (
    <Container>
      <div className="lg:flex gap-4">
        <ProfileSidebar />

        <div className="w-full">
          <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
        </div>
      </div>
    </Container>
  );
}
