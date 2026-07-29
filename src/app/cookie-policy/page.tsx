import type { Metadata } from "next";
import LegalPageView from "@/components/LegalPageView";

export const metadata: Metadata = { title: "Cookie Policy | The Consult Law" };

export default function Page() {
  return <LegalPageView slug="cookie-policy" />;
}
