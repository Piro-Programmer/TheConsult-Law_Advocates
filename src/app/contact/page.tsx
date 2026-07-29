import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | The Consult Law",
  description: "Trusted partners in achieving legal success.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Trusted partners in achieving legal success."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container-base grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-grey">
                Phone
              </h2>
              {contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="mt-3 block text-base text-ink transition-colors hover:text-brand"
                >
                  {phone}
                </a>
              ))}

              <h2 className="mt-10 text-xs font-medium uppercase tracking-[0.14em] text-grey">
                Email
              </h2>
              <a
                href={`mailto:${contact.email}`}
                className="mt-3 block text-base text-ink transition-colors hover:text-brand"
              >
                {contact.email}
              </a>

              <h2 className="mt-10 text-xs font-medium uppercase tracking-[0.14em] text-grey">
                Address
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>

              <h2 className="mt-10 text-xs font-medium uppercase tracking-[0.14em] text-grey">
                Working hours
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink">
                {contact.hours.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/book-consultation">Book a Consultation</Button>
                <Button href={contact.whatsapp} variant="outline" external>
                  WhatsApp us
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-cream p-8 md:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
