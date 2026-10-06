"use client";

import Image from "next/image";
import { useState } from "react";
import { productFilters, products, type Product } from "@/lib/data";
import { useCart } from "./cart-context";
import { Icon } from "./icon";
import { Button, CircleButton, SectionHeading } from "./ui";

function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  function addToBag() {
    add();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <li className="flex flex-col gap-3 lg:gap-5">
      <div className="relative h-[220px] overflow-hidden sm:h-[320px] lg:h-[400px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover"
        />
        <span
          className={`label absolute top-2 left-2 rounded-full px-[9px] py-1.5 text-[8px] leading-none lg:top-3.5 lg:left-3.5 lg:px-3 lg:py-2 lg:text-[9px] ${
            product.badgeTone === "dark" ? "bg-burgundy text-cream" : "bg-ivory text-burgundy"
          }`}
        >
          {product.badge}
        </span>
        <button
          type="button"
          aria-label={`${wished ? "Remove" : "Add"} ${product.name} ${wished ? "from" : "to"} wishlist`}
          aria-pressed={wished}
          onClick={() => setWished((w) => !w)}
          className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-full bg-ivory text-ink lg:top-3.5 lg:right-3.5 lg:size-10"
        >
          <Icon
            name="favourite"
            className={`size-[15px] lg:size-[18px] ${wished ? "fill-terracotta text-terracotta" : ""}`}
          />
        </button>
      </div>

      <div className="flex flex-col gap-[7px] lg:gap-2.5">
        <div className="flex items-center justify-between">
          <span className="label text-[8px] leading-none text-muted lg:text-[9px]">
            {product.category}
          </span>
          <span className="flex items-center gap-1 text-[11px] leading-none text-muted lg:gap-[5px] lg:text-xs">
            <Icon name="star" className="size-[11px] text-terracotta lg:size-[13px]" />
            {product.rating}
          </span>
        </div>
        <h3 className="text-[15px] leading-tight font-medium lg:text-[19px]">{product.name}</h3>
        <p className="hidden text-[13px] leading-tight text-muted lg:block">{product.description}</p>
      </div>

      <div className="flex flex-col gap-3 lg:mt-auto lg:border-t lg:border-line lg:pt-4 xl:flex-row xl:items-center xl:justify-between">
        <p className="flex items-end gap-1.5 lg:gap-2">
          <span
            className={`text-base leading-none font-medium lg:text-xl ${product.compareAtPrice ? "text-terracotta" : ""}`}
          >
            ${product.price}
          </span>
          {product.compareAtPrice && (
            <s className="text-xs leading-none text-muted lg:text-sm">${product.compareAtPrice}</s>
          )}
        </p>
        <Button
          variant="outline"
          size="md"
          icon="plus-sign"
          onClick={addToBag}
          className="py-[13px] lg:py-3"
        >
          {added ? "Added" : "Add to bag"}
        </Button>
      </div>
    </li>
  );
}

export function BestSellers() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section
      id="best-sellers"
      aria-labelledby="best-sellers-title"
      className="flex flex-col gap-7 border-y border-line bg-ivory py-14 lg:gap-14 lg:px-12 lg:py-[104px]"
    >
      <div className="pl-5 lg:pl-0">
        <SectionHeading id="best-sellers-title" eyebrow="(02) — Best sellers" title="The most loved">
          <div className="flex items-center gap-8">
            <div className="no-scrollbar flex gap-2 overflow-x-auto">
              {productFilters.map((name) => (
                <Button
                  key={name}
                  size="chip"
                  variant={filter === name ? "primary" : "subtle"}
                  aria-pressed={filter === name}
                  onClick={() => setFilter(name)}
                  className="last:mr-5 lg:last:mr-0 lg:last:hidden"
                >
                  {name}
                </Button>
              ))}
            </div>
            <div className="hidden gap-2 lg:flex">
              <CircleButton icon="arrow-left-02" label="Previous products" />
              <CircleButton icon="arrow-right-02" label="Next products" />
            </div>
          </div>
        </SectionHeading>
      </div>

      {visible.length > 0 ? (
        <ul className="grid grid-cols-2 gap-x-3 gap-y-8 px-5 lg:grid-cols-4 lg:gap-6 lg:px-0">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <p className="px-5 py-16 text-center text-muted lg:px-0">
          Nothing here yet — new {filter.toLowerCase()} rituals are on the way.
        </p>
      )}

      <div className="flex px-5 lg:justify-center lg:px-0">
        <Button href="#" icon="arrow-right-02" className="flex-1 lg:flex-none">
          View all 128 products
        </Button>
      </div>
    </section>
  );
}
