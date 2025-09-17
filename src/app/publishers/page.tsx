import { PUBLISHER } from "@/assets/images";
import { PublishersHero } from "@/components/Publishers/PublishersHero";
import { SeeWhatsInside } from "@/components/Publishers/SeeWhatsInside";
import { TransparentReporting } from "@/components/Publishers/TransparentReporting";

export default function PublishersPage() {
  return (
    <main className="min-h-screen">
      <PublishersHero
        heading="Publishers"
        description="Monetize your content and grow your audience with our platform."
        image={{ src: PUBLISHER.src, alt: "Publishers Hero" }}
        button={{
          text: "Get Started",
          url: "/get-started",
        }}
      />
      <SeeWhatsInside />
      <TransparentReporting />
    </main>
  );
}
