import Image from "next/image";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./icon";
import { Button, SectionHeading } from "./ui";

function Promo({
  eyebrow,
  eyebrowIcon,
  title,
  note,
  cta,
  image,
  className,
}: {
  eyebrow: string;
  eyebrowIcon?: IconName;
  title: ReactNode;
  note: string;
  cta: string;
  image: string;
  className: string;
}) {
  return (
    <article className={`flex h-44 overflow-hidden lg:h-auto lg:flex-1 ${className}`}>
      <div className="flex flex-1 flex-col items-start justify-between p-5 lg:p-8">
        <p className="flex items-center gap-2 text-terracotta">
          {eyebrowIcon && <Icon name={eyebrowIcon} className="hidden size-4 lg:block" />}
          <span className="label text-[8px] leading-none lg:text-[10px]">{eyebrow}</span>
        </p>
        <div className="flex flex-col gap-[7px] lg:gap-2.5">
          <h3 className="font-display text-[15px] leading-[18px] font-light text-burgundy uppercase lg:text-xl lg:leading-[23px]">
            {title}
          </h3>
          <p className="text-xs leading-tight text-muted lg:text-sm">{note}</p>
        </div>
        <a
          href="#"
          className="label flex items-center gap-2 border-b border-ink pb-1.5 text-[10px] leading-none transition-colors hover:border-terracotta hover:text-terracotta lg:text-[11px]"
        >
          {cta}
          <Icon name="arrow-right-02" className="size-[15px]" />
        </a>
      </div>
      <div className="relative w-[130px] shrink-0 lg:w-[170px]">
        <Image src={image} alt="" fill sizes="170px" className="object-cover" />
      </div>
    </article>
  );
}

export function Offers() {
  return (
    <section
      id="offers"
      aria-labelledby="offers-title"
      className="flex flex-col gap-7 px-5 py-14 lg:gap-14 lg:px-12 lg:py-[104px]"
    >
      <SectionHeading
        id="offers-title"
        eyebrow="(03) — Offers & new in"
        title={
          <>
            This week <br className="lg:hidden" />
            at Solène
          </>
        }
      >
        <p className="hidden items-center gap-2.5 lg:flex">
          <span className="size-[7px] rounded-full bg-terracotta" />
          <span className="label text-[11px] leading-none">Sale ends Sunday — 23:59</span>
        </p>
      </SectionHeading>

      <div className="flex flex-col gap-4 lg:h-[580px] lg:flex-row lg:gap-6">
        <article className="flex flex-col overflow-hidden bg-burgundy text-cream lg:flex-1 lg:flex-row">
          <div className="flex flex-col items-start gap-5 px-6 pt-7 pb-8 lg:flex-1 lg:justify-between lg:gap-0 lg:p-8 xl:p-12">
            <p className="label rounded-full border border-line-light px-3.5 py-[9px] text-[9px] leading-none lg:px-4 lg:py-2.5 lg:text-[10px]">
              Limited — The Ritual Edit
            </p>
            <div className="flex flex-col gap-5 lg:gap-[22px]">
              <h3 className="font-display text-[50px] leading-none font-light tracking-[-2px] whitespace-nowrap uppercase lg:text-[clamp(40px,4.4vw,76px)] lg:tracking-[-3px]">
                Up to
                <br />
                30% off
              </h3>
              <p className="text-[15px] leading-[23px] text-cream/70 lg:max-w-[340px] lg:text-base lg:leading-6">
                Build your three-step ritual and save on every set. Applied automatically at
                checkout.
              </p>
            </div>
            <div className="flex w-full flex-col gap-5 lg:w-auto lg:flex-row lg:items-center lg:gap-6">
              <Button href="#best-sellers" variant="light" icon="arrow-right-02">
                Shop the sale
              </Button>
              <p className="label text-[9px] leading-none text-cream/70 lg:text-[10px]">
                Code — RITUAL30
              </p>
            </div>
          </div>
          <div className="relative order-first h-[260px] lg:order-none lg:h-auto lg:w-[38%] lg:max-w-[400px] lg:shrink-0">
            <Image
              src="/images/offer-ritual-edit.jpg"
              alt="The Ritual Edit skincare set in blush packaging"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
          </div>
        </article>

        <div className="flex flex-col gap-4 lg:w-[380px] lg:shrink-0 lg:gap-6 xl:w-[456px]">
          <Promo
            eyebrow="New arrivals"
            title={
              <>
                Rose quartz
                <br />
                blush balm
              </>
            }
            note="Just landed · from $28"
            cta="Discover"
            image="/images/promo-new-arrivals.jpg"
            className="bg-cream-deep"
          />
          <Promo
            eyebrow="Gift with purchase"
            eyebrowIcon="gift"
            title={
              <>
                Free mini serum
                <br />
                over $80
              </>
            }
            note="Worth $18 · while stocks last"
            cta="Get the gift"
            image="/images/promo-gift.jpg"
            className="border border-line"
          />
        </div>
      </div>
    </section>
  );
}
