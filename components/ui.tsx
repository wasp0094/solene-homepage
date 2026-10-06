import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "./icon";

const buttonVariants = {
  primary: "bg-burgundy text-cream border-burgundy hover:bg-ink hover:border-ink",
  outline: "text-ink border-ink hover:bg-ink hover:text-cream",
  subtle: "text-ink border-line hover:border-ink",
  light: "bg-cream text-burgundy border-cream hover:bg-ivory hover:border-ivory",
};

const buttonSizes = {
  lg: "px-6 py-[17px] lg:px-[30px]",
  md: "px-[18px] py-3",
  chip: "px-4 py-[11px] lg:px-5 lg:py-3",
};

type ButtonProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  icon?: IconName;
  href?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "children">;

export function Button({
  variant = "primary",
  size = "lg",
  icon,
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `label inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border text-[10px] leading-none transition-colors lg:text-[11px] ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className="size-[15px] lg:size-4" />}
    </>
  );
  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}

export function CircleButton({
  icon,
  label,
  className = "",
  ...props
}: { icon: IconName; label: string } & ComponentProps<"button">) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`flex size-11 shrink-0 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-cream ${className}`}
      {...props}
    >
      <Icon name={icon} className="size-[17px]" />
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  id: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="flex flex-col gap-3.5 lg:gap-[18px]">
        <p className="label text-[10px] leading-none text-terracotta lg:text-[11px]">{eyebrow}</p>
        <h2
          id={id}
          className="font-display text-[28px] leading-[30px] font-light tracking-[-0.5px] text-burgundy uppercase lg:text-[42px] lg:leading-[45px] lg:tracking-[-1px]"
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
