"use client";

import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <section
      aria-labelledby="newsletter-title"
      className="flex flex-col gap-5 border-t border-line px-5 py-14 lg:items-center lg:gap-7 lg:px-12 lg:py-[104px]"
    >
      <p className="label text-[10px] leading-none text-terracotta lg:text-[11px]">(04) — The letter</p>
      <h2
        id="newsletter-title"
        className="font-display text-[30px] leading-8 font-light tracking-[-0.8px] text-burgundy uppercase lg:text-center lg:text-5xl lg:leading-[52px] lg:tracking-[-1.5px]"
      >
        10% off your
        <br />
        first ritual
      </h2>
      <p className="text-[15px] leading-[23px] text-muted lg:text-base lg:leading-normal">
        Skin notes, early access and members-only offers. Twice a month, never more.
      </p>

      {subscribed ? (
        <p role="status" className="label py-5 text-[11px] leading-none text-burgundy">
          Thank you — your 10% code is on its way.
        </p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="flex w-full flex-col gap-3 lg:h-[62px] lg:w-[540px] lg:flex-row lg:items-center lg:rounded-full lg:border lg:border-ink lg:pr-1.5 lg:pl-7"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            autoComplete="email"
            placeholder="Your email address"
            className="h-14 w-full min-w-0 shrink-0 rounded-full border border-ink bg-transparent px-6 text-[15px] placeholder:text-muted focus:outline-none lg:h-auto lg:w-auto lg:flex-1 lg:shrink lg:rounded-none lg:border-0 lg:px-0"
          />
          <button
            type="submit"
            className="label rounded-full border border-burgundy bg-burgundy px-7 py-[17px] text-[10px] leading-none text-cream transition-colors hover:border-ink hover:bg-ink lg:text-[11px]"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
