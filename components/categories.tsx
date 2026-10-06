import Image from "next/image";
import { categories } from "@/lib/data";
import { Icon } from "./icon";
import { Button, SectionHeading } from "./ui";

export function Categories() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-title"
      className="flex flex-col gap-7 px-5 py-14 lg:gap-14 lg:px-12 lg:py-[104px]"
    >
      <SectionHeading id="categories-title" eyebrow="(01) — Categories" title="Shop by ritual">
        <div className="hidden lg:block">
          <Button href="#" variant="outline" icon="arrow-right-02">
            View all categories
          </Button>
        </div>
      </SectionHeading>

      <ul className="grid grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-4 lg:gap-6">
        {categories.map((category) => (
          <li key={category.name}>
            <a href="#" className="group flex flex-col gap-3 lg:gap-5">
              <span className="relative block h-[220px] overflow-hidden rounded-t-full sm:h-[320px] lg:h-[440px]">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="flex items-center justify-between">
                <span className="flex flex-col gap-1.5 lg:gap-2">
                  <span className="label text-[10px] leading-none lg:text-[13px]">{category.name}</span>
                  <span className="text-xs leading-none text-muted lg:text-[13px]">
                    {category.count} products
                  </span>
                </span>
                <span className="hidden size-11 items-center justify-center rounded-full border border-ink transition-colors group-hover:bg-ink group-hover:text-cream xl:flex">
                  <Icon name="arrow-up-right-01" className="size-[17px]" />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-col lg:hidden">
        <Button href="#" variant="outline" icon="arrow-right-02">
          View all categories
        </Button>
      </div>
    </section>
  );
}
