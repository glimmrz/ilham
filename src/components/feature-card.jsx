import { Heading } from "./heading";
import { Icon } from "./icon";
import { Container } from "./wrappers/container";

export function FeatureCard({ feature }) {
  return (
    <div className="bg-accent rounded-md">
      <Container>
        <div className="flex items-center justify-center">
          <Icon icon={feature?.icon} size={100} />
        </div>
        <Heading className="text-center my-4">{feature?.label}</Heading>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae
          iure vero atque laborum neque.
        </p>
      </Container>
    </div>
  );
}
