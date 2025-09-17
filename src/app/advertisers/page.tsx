import { ADVERTISER } from "@/assets/images";
import { AdvertisersHero } from "@/components/Advertisers/AdvertisersHero";
import { KeyBenefits } from "@/components/Advertisers/KeyBenefits";
import { AdvertisersCTA } from "@/components/Advertisers/AdvertisersCTA";

export default function AdvertisersPage() {
  return (
    <main className="min-h-screen">
      <AdvertisersHero
        heading="Advertisers"
        description="Reach your target audience with our platform."
        image={{ src: ADVERTISER.src, alt: "Advertisers Hero" }}
      />
      <KeyBenefits />
      <AdvertisersCTA />
    </main>
  );
}
