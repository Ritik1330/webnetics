import { AboutUs } from "@/components/aboutUs";
import { ClientsWhoTrustUs } from "@/components/ClientsWhoTrustUs";
import { Footer } from "@/components/Footer";
import Header from "@/components/header";
import { Hero1 } from "@/components/Hero";
import { OurServices } from "@/components/OurServices";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero1
        heading="Welcome to Our Marketing Site"
        description="Discover our services and solutions to boost your business."
        image={{
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
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
