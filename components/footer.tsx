import { footerColumns, socials } from "@/lib/data";
import { Icon } from "./icon";

const mobileSections = [...footerColumns, { title: "Contact", links: ["Contact us", "Live chat"] }];

export function Footer() {
  return (
    <footer className="flex flex-col gap-8 bg-burgundy px-5 pt-14 pb-8 text-cream lg:gap-[72px] lg:px-12 lg:pt-[88px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="flex flex-col gap-5 lg:w-[420px] lg:shrink-0 lg:gap-6">
          <p className="font-serif text-4xl leading-none font-medium tracking-[6px] lg:text-5xl lg:tracking-[8px]">
            SOLÈNE
          </p>
          <p className="max-w-[320px] text-[15px] leading-[23px] text-cream/70">
            Clean, clinically-minded beauty made in small batches. Kind to skin, and to the planet
            it lives on.
          </p>
          <Socials className="hidden lg:flex" />
        </div>

        {/* Desktop link columns */}
        {footerColumns.map((column) => (
          <nav
            key={column.title}
            aria-label={column.title}
            className="hidden flex-1 flex-col gap-4 lg:flex"
          >
            <p className="label text-[10px] leading-none text-cream/70">{column.title}</p>
            <ul className="flex flex-col gap-3.5 pt-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[15px] leading-tight hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Mobile accordions */}
        <div className="border-t border-line-light lg:hidden">
          {mobileSections.map((section) => (
            <details key={section.title} className="group border-b border-line-light">
              <summary className="flex cursor-pointer list-none items-center justify-between py-[18px] [&::-webkit-details-marker]:hidden">
                <span className="label text-[10px] leading-none">{section.title}</span>
                <Icon
                  name="plus-sign"
                  className="size-4 transition-transform group-open:rotate-45"
                />
              </summary>
              <ul className="flex flex-col gap-3.5 pb-5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[15px] leading-tight">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <Socials className="flex lg:hidden" />
      </div>

      <div className="flex justify-between border-t border-line-light pt-6 text-xs text-cream/70 lg:pt-7 lg:text-[13px]">
        <p>
          © 2026 Solène Beauty<span className="hidden lg:inline">. All rights reserved.</span>
        </p>
        <p>
          Privacy · Terms<span className="hidden lg:inline"> · Cookies</span>
        </p>
      </div>
    </footer>
  );
}

function Socials({ className }: { className: string }) {
  return (
    <ul className={`gap-2.5 lg:pt-2 ${className}`}>
      {socials.map((social) => (
        <li key={social}>
          <a
            href="#"
            aria-label={social}
            className="flex size-11 items-center justify-center rounded-full border border-line-light transition-colors hover:bg-cream hover:text-burgundy"
          >
            <Icon name={social} className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
