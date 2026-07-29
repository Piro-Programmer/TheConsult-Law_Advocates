import Image from "next/image";
import Link from "next/link";
import {
  contact,
  footerIntro,
  footerMenu,
  legalLinks,
  site,
} from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink-deep pt-20 pb-10 text-white">
      <div className="container-base">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Image
              src={site.logo}
              alt={site.name}
              width={240}
              height={64}
              className="h-10 w-auto"
            />
            <h2 className="mt-8 max-w-sm font-display text-2xl font-light leading-snug tracking-tight text-white md:text-3xl">
              {footerIntro.heading}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/50">
              {footerIntro.body}
            </p>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-white/40">
              Talk to us
            </h3>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 block text-sm text-white/70 transition-colors hover:text-white"
            >
              {contact.email}
            </a>
            {contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="mt-1 block text-sm text-white/70 transition-colors hover:text-white"
              >
                {phone}
              </a>
            ))}

            <h3 className="mt-9 text-xs font-medium uppercase tracking-[0.14em] text-white/40">
              Address
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <h3 className="mt-9 text-xs font-medium uppercase tracking-[0.14em] text-white/40">
              Working hours
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {contact.hours.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-white/40">
              Menu
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerMenu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline gap-3 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <span className="text-xs tabular-nums text-white/30">
                      {item.number}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © 2026 {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-white/40 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
