// biome-ignore assist/source/organizeImports: <explanation>
import { AboutUs } from "@/components/home/aboutUs";
import { ClientsWhoTrustUs } from "@/components/home/ClientsWhoTrustUs";

import { Hero } from "@/components/home/Hero";
import { OurServices } from "@/components/home/OurServices";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <ClientsWhoTrustUs />
    </>
  );
}
