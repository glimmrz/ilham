import { DataCell } from "@/components/data-cell";
import { ContactForm } from "@/components/forms/contact-form";
import { Heading } from "@/components/heading";
import { Container } from "@/components/wrappers/container";

export const metadata = {
  title: "Contact information | AlgoMart",
  description: "Our contact information.",
};

export default async function Page() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-2">
        <div className="grid gap-4 h-fit">
          <Heading>contact information</Heading>
          <div className="h-fit grid grid-cols-1 gap-y-8 gap-x-2 md:grid-cols-2">
            <DataCell
              link
              dataName="phone"
              href="tel:+8801873228724"
              dataValue="+8801873228724"
              icon="phone"
            />
            <DataCell
              link
              dataName="email"
              href="mailto:admin@mail.com"
              dataValue="admin@mail.com"
              icon="email"
            />
            <DataCell
              dataName="Dhaka office"
              dataValue="mirpur, dhaka 1216"
              icon="location"
            />
            <DataCell
              dataName="barishal office"
              dataValue="barishal"
              icon="location"
            />
          </div>
        </div>
        {/* Contact form */}
        <div className="grid gap-4 h-fit">
          <Heading>send us a message</Heading>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
