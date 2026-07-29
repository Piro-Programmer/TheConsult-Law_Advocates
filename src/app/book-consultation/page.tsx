import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ConsultWizard from "@/components/ConsultWizard";

export const metadata: Metadata = {
  title: "Book a Consultation | The Consult Law",
  description:
    "Tell us what you're dealing with. Three quick questions — no obligation, no jargon.",
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        label="Book a consultation"
        title="Tell us what you're dealing with."
        body="Three quick questions — no obligation, no jargon."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container-base">
          <ConsultWizard />
        </div>
      </section>
    </>
  );
}
