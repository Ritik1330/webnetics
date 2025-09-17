// biome-ignore assist/source/organizeImports: <explanation>
import { AboutUs } from "@/components/aboutUs";
import { ClientsWhoTrustUs } from "@/components/ClientsWhoTrustUs";
import { Footer } from "@/components/Footer";
import Header from "@/components/header";
import { Hero } from "@/components/Hero";
import { OurServices } from "@/components/OurServices";

export default function Home() {
  return (
    <div className="overflow-x-hidden pt-[70px] md:pt-0">
      <Header />
      <Hero />
      <AboutUs />
      <OurServices />
      <ClientsWhoTrustUs />
      <Footer />
    </div>
  );
}
