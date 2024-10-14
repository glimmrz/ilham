import { Heading } from "../heading";
import { RichTextViewer } from "../rich-text-viewer";
import { Section } from "../section";

export function ProductDetails({ currentProduct }) {
  return (
    <Section className="space-y-4">
      <Heading>Description</Heading>
      <RichTextViewer htmlContent={currentProduct?.description} />
    </Section>
  );
}
