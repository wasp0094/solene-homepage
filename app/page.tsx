import { BestSellers } from "@/components/best-sellers";
import { CartProvider } from "@/components/cart-context";
import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero, TrustStrip } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Offers } from "@/components/offers";

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Categories />
        <BestSellers />
        <Offers />
        <Newsletter />
      </main>
      <Footer />
    </CartProvider>
  );
}
