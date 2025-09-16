import { HERO } from "@/assets/images";
import { AboutUs } from "@/components/aboutUs";
import { ClientsWhoTrustUs } from "@/components/ClientsWhoTrustUs";
import { Footer } from "@/components/Footer";
import Header from "@/components/header";
import { Hero1 } from "@/components/Hero";
import { OurServices } from "@/components/OurServices";

export default function Home() {
  return (
    <div className="overflow-x-hidden pt-[70px] md:pt-0">
      <Header />
      <Hero1
        heading="Creative. Strategic. Everywhere – 360° Solutions for Your Brand  "
        description="Discover our services and solutions to boost your business."
        image={{
          src: HERO.src,
          alt: "Hero image",
        }}
      />
      <AboutUs />
      <OurServices />
      <ClientsWhoTrustUs />
      <Footer />
    </div>
  );
}
