import type { IconName } from "@/components/icon";

export const navLinks = ["Skincare", "Makeup", "Haircare", "Body", "Fragrance"];

export const trustItems: { icon: IconName; label: string }[] = [
  { icon: "delivery-truck-01", label: "Free shipping $50+" },
  { icon: "rabbit", label: "Cruelty-free" },
  { icon: "leaf-01", label: "Clean ingredients" },
  { icon: "gift", label: "Free samples" },
];

export const categories = [
  { name: "Skincare", count: 42, image: "/images/category-skincare.jpg" },
  { name: "Makeup", count: 36, image: "/images/category-makeup.jpg" },
  { name: "Haircare", count: 24, image: "/images/category-haircare.jpg" },
  { name: "Body & Fragrance", count: 26, image: "/images/category-body-fragrance.jpg" },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  badge: string;
  badgeTone?: "light" | "dark";
  image: string;
};

export const productFilters = ["All", "Skincare", "Makeup", "Haircare", "Body"];

export const products: Product[] = [
  {
    id: "dew-drops-serum",
    name: "Dew Drops Serum",
    category: "Skincare",
    description: "Hyaluronic acid + wild rose · 30 ml",
    price: 48,
    rating: 4.9,
    badge: "Best seller",
    image: "/images/product-dew-drops-serum.jpg",
  },
  {
    id: "velvet-lip-colour",
    name: "Velvet Lip Colour",
    category: "Makeup",
    description: "Soft-matte in Rosewood · 8h wear",
    price: 26,
    rating: 4.8,
    badge: "New",
    image: "/images/product-velvet-lip-colour.jpg",
  },
  {
    id: "silk-repair-hair-oil",
    name: "Silk Repair Hair Oil",
    category: "Haircare",
    description: "Argan + camellia · 50 ml",
    price: 34,
    rating: 4.7,
    badge: "Best seller",
    image: "/images/product-silk-repair-hair-oil.jpg",
  },
  {
    id: "cloud-cream",
    name: "Cloud Cream",
    category: "Skincare",
    description: "Ceramide barrier moisturiser · 50 ml",
    price: 42,
    compareAtPrice: 52,
    rating: 4.9,
    badge: "−20%",
    badgeTone: "dark",
    image: "/images/product-cloud-cream.jpg",
  },
];

export const footerColumns = [
  { title: "Shop", links: ["Skincare", "Makeup", "Haircare", "Body & Fragrance", "Offers"] },
  { title: "About", links: ["Our story", "Ingredients", "Sustainability", "The Journal"] },
  { title: "Help", links: ["Contact us", "Shipping & returns", "FAQ", "Track your order"] },
];

export const socials: IconName[] = ["instagram", "tiktok", "pinterest", "youtube"];
