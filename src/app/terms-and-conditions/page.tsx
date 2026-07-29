import type { Metadata } from "next";
import LegalPageView from "@/components/LegalPageView";

export const metadata: Metadata = { title: "Terms and Conditions | The Consult Law" };

export default function Page() {
  return <LegalPageView slug="terms-and-conditions" />;
}
