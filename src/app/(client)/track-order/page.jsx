import { TrackOrderForm } from "@/components/forms/track-order-form";
import { Container } from "@/components/wrappers/container";

export default async function Page() {
  return (
    <Container>
      <div className="flex items-center justify-center min-h-[calc(theme(height.screen)-140px)] w-full">
        <TrackOrderForm />
      </div>
    </Container>
  );
}
