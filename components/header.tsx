"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";
import { useCart } from "./cart-context";
import { Icon } from "./icon";

function CartButton() {
  const { count } = useCart();
  return (
    <a href="#" aria-label={`Bag, ${count} items`} className="flex items-center gap-1.5 xl:gap-2">
      <Icon name="shopping-bag-01" className="size-[21px] xl:size-[22px]" />
      <span className="flex size-[18px] items-center justify-center rounded-full bg-burgundy text-[10px] leading-none font-semibold text-cream xl:size-5 xl:text-[11px]">
        {count}
      </span>
    </a>
  );
}

function SearchField({ id }: { id: string }) {
  return (
    <form role="search" className="flex w-full items-center gap-3" action="#">
      <Icon name="search-01" className="size-[18px] shrink-0" />
      <label htmlFor={id} className="sr-only">
        Search products
      </label>
      <input
        id={id}
        type="search"
        placeholder="Search serums, lip colour…"
        className="w-full min-w-0 bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
      />
    </form>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeChip, setActiveChip] = useState(navLinks[0]);

  return (
    <header>
      <div className="flex h-[34px] items-center justify-center gap-2.5 bg-burgundy text-cream xl:h-[38px] xl:gap-3.5">
        <p className="label text-[9px] leading-none xl:text-[10px]">
          <span className="xl:hidden">Free shipping over $50</span>
          <span className="hidden xl:inline">Complimentary shipping over $50</span>
        </p>
        <span aria-hidden="true" className="text-[9px] leading-none xl:text-[10px]">
          ✦
        </span>
        <p className="label text-[9px] leading-none xl:text-[10px]">
          <span className="xl:hidden">2 free samples</span>
          <span className="hidden xl:inline">Two free samples with every order</span>
        </p>
      </div>

      {/* Desktop header */}
      <div className="hidden h-[84px] items-stretch border-b border-line xl:flex">
        <a
          href="#"
          className="flex items-center border-r border-line px-12 font-serif text-[30px] leading-none font-medium tracking-[5px] text-burgundy"
        >
          SOLÈNE
        </a>
        <nav aria-label="Main" className="flex flex-1 items-center justify-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#categories"
              className="label text-[11px] leading-none text-ink transition-colors hover:text-terracotta"
            >
              {link}
            </a>
          ))}
          <a href="#offers" className="label text-[11px] leading-none text-terracotta">
            Offers
          </a>
        </nav>
        <div className="flex w-[300px] items-center border-x border-line px-6">
          <SearchField id="search-desktop" />
        </div>
        <div className="flex items-center gap-[26px] pr-12 pl-8">
          <a href="#" aria-label="Account">
            <Icon name="user" className="size-[22px]" />
          </a>
          <a href="#" aria-label="Wishlist">
            <Icon name="favourite" className="size-[22px]" />
          </a>
          <CartButton />
        </div>
      </div>

      {/* Mobile header */}
      <div className="xl:hidden">
        <div className="flex h-16 items-stretch border-b border-line">
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex w-16 items-center justify-center border-r border-line"
          >
            <Icon name="menu-01" className="size-[22px]" />
          </button>
          <a
            href="#"
            className="flex flex-1 items-center px-5 font-serif text-2xl leading-none font-medium tracking-[4px] text-burgundy"
          >
            SOLÈNE
          </a>
          <div className="flex items-center gap-[18px] border-l border-line px-5">
            <a href="#" aria-label="Account">
              <Icon name="user" className="size-[21px]" />
            </a>
            <CartButton />
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Main"
            className="flex flex-col border-b border-line bg-ivory"
          >
            {[...navLinks, "Offers"].map((link) => (
              <a
                key={link}
                href={link === "Offers" ? "#offers" : "#categories"}
                onClick={() => setMenuOpen(false)}
                className={`label border-b border-line px-5 py-4 text-[11px] leading-none last:border-b-0 ${link === "Offers" ? "text-terracotta" : "text-ink"}`}
              >
                {link}
              </a>
            ))}
          </nav>
        )}
        <div className="flex h-[52px] items-center border-b border-line px-5">
          <SearchField id="search-mobile" />
        </div>
        <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-line py-3.5 pl-5">
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              aria-pressed={activeChip === link}
              onClick={() => setActiveChip(link)}
              className={`label shrink-0 rounded-full border px-4 py-[11px] text-[10px] leading-none transition-colors last:mr-5 ${
                activeChip === link
                  ? "border-burgundy bg-burgundy text-cream"
                  : "border-line text-ink"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
