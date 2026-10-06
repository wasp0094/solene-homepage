import Image from "next/image";
import { trustItems } from "@/lib/data";
import { Icon } from "./icon";
import { Button } from "./ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="flex flex-col border-b border-line lg:h-[740px] lg:flex-row">
      <div className="flex flex-col gap-[22px] px-5 pt-8 pb-9 lg:w-[45.8%] lg:shrink-0 lg:justify-between lg:gap-0 lg:p-12">
        <p className="flex items-center gap-2.5 lg:gap-3">
          <span className="size-1.5 rounded-full bg-terracotta lg:size-[7px]" />
          <span className="label text-[10px] leading-none lg:text-[11px]">New — The Dew Collection</span>
        </p>

        <div className="flex flex-col gap-[22px] lg:gap-7">
          <h1
            id="hero-title"
            className="font-display text-[40px] leading-[43px] font-light tracking-[-1.2px] text-burgundy uppercase lg:text-[clamp(44px,4.45vw,64px)] lg:leading-[1.08] lg:tracking-[-2px]"
          >
            Skin that
            <br />
            holds the
            <br />
            light
          </h1>
          <p className="text-[15px] leading-[23px] text-muted lg:max-w-[440px] lg:text-[17px] lg:leading-[26px]">
            A three-step hydration ritual with hyaluronic acid and wild rose. Dewy, plump, luminous
            skin — in fourteen days or your money back.
          </p>
          <div className="flex flex-col gap-3 lg:flex-row lg:pt-2">
            <Button href="#best-sellers" icon="arrow-right-02">
              Shop now
            </Button>
            <Button href="#categories" variant="outline">
              Explore products
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="flex gap-[3px] text-terracotta" role="img" aria-label="Rated 4.9 out of 5">
            {Array.from({ length: 5 }, (_, i) => (
              <Icon key={i} name="star" className="size-[15px]" />
            ))}
          </div>
          <p className="text-[13px] leading-none text-muted">
            4.9 / 5 — <span className="lg:hidden">12,400 reviews</span>
            <span className="hidden lg:inline">loved by 12,400 skin obsessives</span>
          </p>
        </div>
      </div>

      <div className="relative order-first h-[460px] overflow-hidden lg:order-none lg:h-auto lg:flex-1 lg:border-l lg:border-line">
        <Image
          src="/images/hero.jpg"
          alt="Model with luminous, dewy skin"
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
        <p className="label absolute top-4 left-4 rounded-full bg-ivory px-3.5 py-[9px] text-[9px] leading-none text-burgundy lg:top-8 lg:left-8 lg:px-4 lg:py-2.5 lg:text-[10px]">
          Launch offer — 15% off the trio
        </p>
        <a
          href="#best-sellers"
          className="group absolute inset-x-4 bottom-4 flex items-center gap-3.5 bg-ivory p-3 lg:inset-x-auto lg:right-8 lg:bottom-12 lg:w-[340px] lg:gap-4 lg:p-3.5"
        >
          <span className="relative h-16 w-14 shrink-0 lg:h-[92px] lg:w-[76px]">
            <Image src="/images/featured-serum.jpg" alt="" fill sizes="76px" className="object-cover" />
          </span>
          <span className="flex flex-1 flex-col gap-[5px] lg:gap-1.5">
            <span className="label text-[8px] leading-none text-terracotta lg:text-[9px]">Featured</span>
            <span className="text-[15px] leading-tight font-medium lg:text-base">Dew Drops Serum</span>
            <span className="text-xs leading-tight text-muted lg:text-[13px]">$48 · 30 ml</span>
          </span>
          <span className="flex size-[38px] shrink-0 items-center justify-center rounded-full border border-ink transition-colors group-hover:bg-ink group-hover:text-cream lg:size-10">
            <Icon name="arrow-up-right-01" className="size-[15px] lg:size-4" />
          </span>
        </a>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <ul className="grid grid-cols-2 border-b border-line lg:grid-cols-4">
      {trustItems.map((item) => (
        <li
          key={item.label}
          className="flex h-14 items-center justify-center gap-2.5 border-line text-burgundy odd:border-r nth-[-n+2]:border-b lg:h-[78px] lg:gap-3.5 lg:border-r lg:last:border-r-0 lg:nth-[-n+2]:border-b-0"
        >
          <Icon name={item.icon} className="size-4 lg:size-5" />
          <span className="label text-[8px] leading-none text-ink lg:text-[10px]">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
